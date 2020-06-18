using TinyMuseum;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Physics;
using Unity.Tiny.Rendering;
using Unity.Transforms;
using System;
using Unity.Tiny;
using System.Runtime.InteropServices;

/*#if UNITY_DOTSPLAYER
using System;
using Unity.Tiny.Input;
#else
using UnityEngine;
#endif*/


namespace TinyPhysics.Systems
{
   

    /// <summary>
    ///     Detect when a body is grabbed and move it along the ground
    ///     Use a raycast to find the ground position and place the object above it
    /// </summary>
    public class PointerDragSystem : PointerSystemBase
    {
        private CollisionFilter m_GroundCollisionFilter;

        [DllImport("__Internal")]
        private static extern void OpenURL();

        protected override void OnCreate()
        {
            base.OnCreate();

            m_GroundCollisionFilter = new CollisionFilter
            {
                BelongsTo = 0xffffffff,
                CollidesWith = 1u << 4,     // Target only ground layer
                GroupIndex = 0,
            };
        }
        
        protected override void OnInputDown(int pointerId, float2 inputPos)
        {//移动
            // Get entity under pointer
            var pointerRaycastHit = GetPointerRaycastHit(inputPos, m_CollisionFilter);
            var pointerEntity = pointerRaycastHit.Entity;
            
            if (pointerEntity != Entity.Null && HasComponent<Clickable>(pointerEntity) && HasComponent<FootPoints>(pointerEntity))
            {
                var position = GetComponent<Translation>(pointerEntity);               
                Entities.ForEach((ref Move move, ref Translation translation) =>
                {
                    if (!move.IsMove)
                    {
                        float3 temp = position.Value;
                        temp.y += 1.6f;
                        move.Destination = temp;
                        move.IsMove = true;
                    }

                    
                }).WithoutBurst().Run();
            }
            ///点击图片
            if (pointerEntity != Entity.Null && HasComponent<Clickable>(pointerEntity) && HasComponent<Exhibits>(pointerEntity)) {
                Entities.ForEach((ref Player player, ref Rotate rotate) =>
                {
                    rotate.IsRotate = true;
                }
                ).WithoutBurst().Run();

               

                var temprender = EntityManager.GetComponentData<MeshRenderer>(pointerEntity);
                var tempmat = EntityManager.GetComponentData<LitMaterial>(temprender.material);
/*
#if !UNITY_DOTSPLAYER
                int width = UnityEngine.Screen.width;
#else
                var di = GetSingleton<DisplayInfo>();
                int width = di.width;
#endif*/


                Entities.ForEach((ref UI ui,ref Entity entity, ref MeshRenderer render,ref Translation translation
                    ) =>
                {
                    ui.ZoomOut = true;
                    //translation.Value.z = width / 2;
                    var mat = EntityManager.GetComponentData<SimpleMaterial>(render.material);
                    mat.texAlbedoOpacity = tempmat.texAlbedoOpacity;
                    EntityManager.SetComponentData<SimpleMaterial>(render.material, mat);
                    
                }).WithoutBurst().Run();
            }

            ///点击超链接button
            if (pointerEntity != Entity.Null && HasComponent<Clickable>(pointerEntity) && HasComponent<URL>(pointerEntity))
            {
                Entities.ForEach((ref Player player, ref Rotate rotate) =>
                {
                    rotate.IsRotate = true;
                }
                ).WithoutBurst().Run();


                //OpenURL();
            }

            ///点击播放视频
            if (pointerEntity != Entity.Null && HasComponent<Clickable>(pointerEntity) && HasComponent<Audio>(pointerEntity))
            {
                Entities.ForEach((ref Player player, ref Rotate rotate) =>
                {
                    rotate.IsRotate = true;
                }
                ).WithoutBurst().Run();


            }




            if (pointerEntity != Entity.Null && HasComponent<Clickable>(pointerEntity) && HasComponent<UI>(pointerEntity))
            {
                Entities.ForEach((ref Player player, ref Rotate rotate) =>
                {
                    rotate.IsRotate = false;
                }
               ).WithoutBurst().Run();

                Entities.ForEach((ref UI ui, ref Entity entity) =>
                {
                    ui.ZoomOut = false;

                }).WithoutBurst().Run();
            }
        }      

    }


}
