using Unity.Entities;
using Unity.Mathematics;
namespace TinyMuseum
{
    [GenerateAuthoringComponent]
    public struct Exhibits : IComponentData
    {
        public bool IsFocus;
    }
}