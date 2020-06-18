﻿using Unity.Entities;
using Unity.Mathematics;
namespace TinyMuseum
{
    [GenerateAuthoringComponent]
    public struct Audio : IComponentData
    {
        public bool IsFocus;
    }
}