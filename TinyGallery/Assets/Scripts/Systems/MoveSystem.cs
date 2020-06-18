using System.Diagnostics;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Tiny.Input;
using Unity.Transforms;

namespace TinyMuseum
{
    public class MoveSystem : SystemBase
    {

        private float MinDistance = 0.1f;
        private float MaxDistance = 70f;
        private float Speed = 0.05f;
        protected override void OnUpdate()
        {            
            Entities.ForEach((ref Move move,ref Translation translation,ref Entity entity) =>
            {                
                if (GetDistance(move.Destination , translation.Value) > MinDistance &&
                    GetDistance(move.Destination , translation.Value) < MaxDistance &&
                    move.IsMove )
                {
                    translation.Value += (move.Destination - translation.Value) * Speed;
                }
                else {
                    move.IsMove = false;
                }
            }


            ).WithoutBurst().Run();
        }

        private float GetDistance(float3 num1,float3 num2) {
            return Square(num1.x - num2.x) +
                   Square(num1.y - num2.y) +
                   Square(num1.z - num2.z);
        }

        private float Square(float num) {
            return num * num;
        }
    }
}