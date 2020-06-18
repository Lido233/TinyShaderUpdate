#if UNITY_DOTSPLAYER_EXPERIMENTAL_FIXED_SIM

#else
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;



namespace ExhibitionToolkit
{
    public class ConvertTextToTexture : EditorWindow
    {
        private string text = "";
        [MenuItem("网上虚拟展厅编辑工具/文字转换工具")]
        public static void ShowImportExhibitsWindow()
        {
            EditorWindow window = EditorWindow.GetWindow(typeof(ConvertTextToTexture), false, "文字转换工具");
            window.maxSize = window.minSize = new Vector2(800, 250);
        }

        private void OnGUI()
        {
            EditorGUILayout.HelpBox("该功能暂未开启！",MessageType.Warning);
            //GUILayout.Space(10);
            //GUILayout.Label("请输入文字描述(不超过150字)：");
            //text = EditorGUILayout.TextArea(text, GUILayout.Height(position.height - 50));      
            //GUILayout.BeginHorizontal();
            //GUILayout.FlexibleSpace();
            //if (GUILayout.Button("转换", GUILayout.Width(200)))
            //{
                
            //}
            //GUILayout.FlexibleSpace();
            //GUILayout.EndHorizontal();

            //Rect TextAreaRect = new Rect(25, 25, 250, 100);
            //int width = Mathf.FloorToInt(TextAreaRect.width);
            //int height = Mathf.FloorToInt(TextAreaRect.height);
            //Texture2D text_texture = new Texture2D(width, height, TextureFormat.RGB24, false);

            //Rect tempRect = TextAreaRect;
            ////There's probably a tidier way to calculate this:
            ////Flip to match the Y axis properly.
            //tempRect.y = Screen.height - TextAreaRect.y - TextAreaRect.height;
            ////Grab the pixels from the system buffer.
            //text_texture.ReadPixels(tempRect, 0, 0);
            //text_texture.Apply(); //Apply the read.
        }
    }
}


#endif
