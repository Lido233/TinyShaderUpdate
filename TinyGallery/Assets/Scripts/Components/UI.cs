using Unity.Entities;
namespace TinyMuseum
{
    [GenerateAuthoringComponent]
    public struct UI : IComponentData
    {
        public bool ZoomOut;

    }
}