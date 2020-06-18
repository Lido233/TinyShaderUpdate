using Unity.Entities;
using Unity.Mathematics;
using Unity.Physics;
using Unity.Physics.Systems;
using Unity.Tiny.Input;
using Unity.Tiny.Rendering;

namespace TinyPhysics.Systems
{
    /// <summary>
    ///     Translate mouse and touch inputs into overrideable functions
    ///     Create a convenience function to detect object under pointer
    /// </summary>
    public abstract class PointerSystemBase : SystemBase
    {
        protected InputSystem m_InputSystem;
        protected ScreenToWorld m_ScreenToWorld;

        protected CollisionFilter m_CollisionFilter;
        protected float m_RayDistance = 100f;

        protected override void OnCreate()
        {
            m_InputSystem = World.GetExistingSystem<InputSystem>();
            m_ScreenToWorld = World.GetExistingSystem<ScreenToWorld>();

            // Category names are defined in Assets/PhysicsCategoryNames and assgined to PhysicsShape components in Editor
            m_CollisionFilter = new CollisionFilter
            {
                BelongsTo = 1u << 30,           // Set raycast to Input category
                CollidesWith = 0xffffffff,      // Target everything
                GroupIndex = 0,
            };
        }

        protected override void OnUpdate()
        {
            // Touch
            if (m_InputSystem.IsTouchSupported() && m_InputSystem.TouchCount() > 0)
            {
                for (var i = 0; i < m_InputSystem.TouchCount(); i++)
                {
                    var touch = m_InputSystem.GetTouch(i);
                    var inputPos = new float2(touch.x, touch.y);

                    switch (touch.phase)
                    {
                        case TouchState.Began:
                            OnInputDown(i, inputPos);
                            break;
                    }
                }
            }

            // Mouse
            else if (m_InputSystem.IsMousePresent())
            {
                var inputPos = m_InputSystem.GetInputPosition();

                if (m_InputSystem.GetMouseButtonDown(0))
                {
                    OnInputDown(-1, inputPos);
                }

            }
        }

        protected abstract void OnInputDown(int pointerId, float2 inputPos);

        protected RaycastHit GetPointerRaycastHit(float2 inputPos, CollisionFilter collisionFilter)
        {
            ref PhysicsWorld physicsWorld = ref World.DefaultGameObjectInjectionWorld.GetExistingSystem<BuildPhysicsWorld>().PhysicsWorld;

            // Convert input position to ray going from screen to world
            float3 rayOrigin, rayDirection;
            m_ScreenToWorld.InputPosToWorldSpaceRay(inputPos, out rayOrigin, out rayDirection);

            var RaycastInput = new RaycastInput
            {
                Start = rayOrigin,
                End = rayOrigin - rayDirection * m_RayDistance,
                Filter = collisionFilter
            };

            // Return top-most entity that was hit by ray
            physicsWorld.CastRay(RaycastInput, out RaycastHit hit);
            return hit;
        }
    }
}
