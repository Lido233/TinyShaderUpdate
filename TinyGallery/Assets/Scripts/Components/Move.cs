using Unity.Entities;
using Unity.Mathematics;
namespace TinyMuseum
{
    [GenerateAuthoringComponent]
    public struct Move : IComponentData
    {
        public float3 Destination;
        public bool IsMove;
    }
}