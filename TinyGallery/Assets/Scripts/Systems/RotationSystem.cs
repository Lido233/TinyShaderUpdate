using System.Diagnostics;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Tiny.Input;
using Unity.Transforms;

namespace TinyMuseum
{
    public class RotationSystem : SystemBase
    {
        protected override void OnUpdate()
        {
            float time = (float)Time.ElapsedTime;
            Entities.ForEach((ref Rotate rotate, ref Rotation rotation) =>
            {                
                quaternion qx = quaternion.RotateX(rotate.RotateX);
                quaternion qy = quaternion.RotateY(rotate.RotateY);
                quaternion qz = quaternion.RotateZ(rotate.RotateZ);
                rotation.Value = math.normalize(math.mul(qz, math.mul(qy, qx)));          
                         
            }).ScheduleParallel();
        }
    }
}