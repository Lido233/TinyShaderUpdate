using System.Diagnostics;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Tiny.Input;
using Unity.Tiny.Rendering;
using Unity.Transforms;

namespace TinyMuseum
{
    public class ScaleSystem : SystemBase
    {
        protected override void OnUpdate()
        {
            float time = (float)Time.ElapsedTime;
            Entities.ForEach((ref UI ui, ref Translation translation, ref Entity entity) =>
            {

                if (ui.ZoomOut)
                {
                    //var uiMaterial = EntityManager.GetComponentData<LitMaterial>(entity);
                    //uiMaterial.texAlbedoOpacity = ui.Texture;
                    if (translation.Value.z > 1.9f)
                    {
                        translation.Value.z = 1.9f;
                    }
                    if (translation.Value.z > 0.5f)
                    {
                        translation.Value.z -= 0.1f;                       
                    }
                }
                else {
                    if (translation.Value.z < 1.9f)
                    {
                        translation.Value.z += 0.1f;
                    }
                    else
                    {
                        translation.Value.z = 200;
                    }
                }

            }).WithoutBurst().Run();
        }
    }
}