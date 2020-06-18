#if UNITY_DOTSPLAYER_EXPERIMENTAL_FIXED_SIM

#else
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;



namespace ExhibitionToolkit {
    public class ImportExhibits : EditorWindow
    {
        [MenuItem("网上虚拟展厅编辑工具/展品批量导入")]
        public static void ShowImportExhibitsWindow() {
            EditorWindow window = EditorWindow.GetWindow(typeof(ImportExhibits), false, "展品批量导入");
            window.maxSize = window.minSize = new Vector2(800, 250);
        }

        private void OnGUI()
        {
            EditorGUILayout.HelpBox("该功能暂未开启！",MessageType.Warning);
        }
    }
}


#endif
