using Unity.Entities;
namespace TinyMuseum
{
    [GenerateAuthoringComponent]
    public struct Rotate : IComponentData
    {
        public float RotateX;
        public float RotateY;
        public float RotateZ;

        public bool IsRotate;
    }
}