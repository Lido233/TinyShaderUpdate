using Unity.Entities;
using Unity.Mathematics;
namespace TinyMuseum
{
    [GenerateAuthoringComponent]
    public struct URL : IComponentData
    {
        public bool IsFocus;
    }
}