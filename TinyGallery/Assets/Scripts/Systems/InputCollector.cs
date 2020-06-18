using System.Diagnostics;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Tiny;

#if UNITY_DOTSPLAYER
using System;
using Unity.Tiny.Input;

#else
using UnityEngine;
#endif

/*using Unity.Tiny.Assertions;
using Unity.Tiny.Input;
using Unity.Tiny.Rendering;
using Unity.Transforms;*/

namespace TinyMuseum
{
    public class InputCollector : SystemBase
    {
        private float NegativeSpeed = 25;
        private float VerticalLimit = 0.6f;
        bool create = true;

        protected override void OnUpdate()
        {
            //Get the keyboard input data
            var inputAxis = new float2(0, 0);
            //var window
            //var input = World.GetOrCreateSystem<InputSystem>();

#if UNITY_DOTSPLAYER
            var Input = World.GetExistingSystem<InputSystem>();
#endif



            if (Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.UpArrow)) {
                inputAxis.y = 1;                
            }

            if (Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.DownArrow)) {
                inputAxis.y = -1;
            }

            if (Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow)) {   
                inputAxis.x = -1;
            }

            if (Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow)) {               
                inputAxis.x = 1;
            }


#if !UNITY_DOTSPLAYER
            
            if (Input.touchCount> 0 && Input.GetTouch(0).phase == TouchPhase.Moved)
            {
                var touchDelta = new float2(Input.GetTouch(0).deltaPosition.x, Input.GetTouch(0).deltaPosition.y);
                inputAxis = math.normalizesafe(touchDelta);
            }
#else
            //Get the touch input data
            if (Input.TouchCount() > 0 && Input.GetTouch(0).phase == TouchState.Moved)
            {
                var touchDelta = new float2(Input.GetTouch(0).deltaX, Input.GetTouch(0).deltaY);
                inputAxis = math.normalizesafe(touchDelta);
            }
#endif
            inputAxis = inputAxis / NegativeSpeed;

            Entities.ForEach((ref Rotate rotate, ref Player player) =>
            {
                if (!rotate.IsRotate) {
                    rotate.RotateX -= inputAxis.y;
                    rotate.RotateX = Clamp(rotate.RotateX, -VerticalLimit, VerticalLimit);
                    rotate.RotateY += inputAxis.x;
                }             
                
            }).WithoutBurst().Run();

        }






        private float Clamp(float value,float min,float max) {
            if (value < min) {
                value = min;
            }
            if (value > max) {
                value = max;
            }
            return value;
        }

    }
}