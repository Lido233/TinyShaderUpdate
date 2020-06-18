#if UNITY_DOTSPLAYER_EXPERIMENTAL_FIXED_SIM

#else
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Unity.Mathematics;
using System;
using UnityEngine.SceneManagement;
using UnityEditor;

namespace ExhibitionToolkit {
    public enum MuseumStyle{
        none = 0,
        modern = 1,
        classical = 2,
        chinese = 3
    }

    public class GenerateMuseum : EditorWindow
    {
        private int ExhibitsNum = 0;
        private Texture Style_tex;

        private MuseumStyle MuseumStyleSelected = MuseumStyle.none;
        private string message = "请选择展馆风格！";
        private int RoomNum = 0;
 
        private GameObject OneRoom;
        private GameObject EnterRoom;
        private GameObject ConnectRoom;
        private GameObject ExitRoom;
        private static ModelPath ModelConfig;
        private static IconPath IconConfig;
        private static List<GameObject> RoomList;

        [MenuItem("网上虚拟展厅编辑工具/创建美术馆")]
        public static void ShowGenerateWindow()
        {
            ResourceCheck();
            EditorWindow window = EditorWindow.GetWindow(typeof(GenerateMuseum), false, "创建美术馆");
            window.maxSize = window.minSize = new Vector2(800, 250);
            if (RoomList == null) {
                RoomList = new List<GameObject>();
            }
        }

        private static void ResourceCheck()
        {
            if (ModelConfig == null) ModelConfig = (ModelPath)Resources.Load("Data");
            if (IconConfig == null) IconConfig = (IconPath)Resources.Load("IconData");
        }

        private void OnGUI()
        {
            ResourceCheck();
            EditorGUILayout.BeginVertical("box");
            ExhibitsNumArea();
            MuseumStyleSelectArea();
            WarningArea();
            GenerateButton(); 
            EditorGUILayout.EndVertical();
        }

        private void OnDisable()
        {
            ExhibitsNum = 0;
            message = "请选择展馆风格！";
    }

        private void ExhibitsNumArea()
        {
            EditorGUILayout.BeginVertical("box", GUILayout.Height(30), GUILayout.Width(200));
            EditorGUILayout.BeginHorizontal();
            //EditorGUILayout.LabelField("展品数量：");
            ExhibitsNum = EditorGUILayout.IntField("展品数量：", ExhibitsNum, GUILayout.Height(20),GUILayout.Width(300));
            EditorGUILayout.EndHorizontal();
            EditorGUILayout.EndVertical();
        }

        private void MuseumStyleSelectArea()
        {
            EditorGUILayout.BeginVertical("box", GUILayout.Height(80));
            GUILayout.Space(10);
            GUILayout.Label("请选择展馆风格：");
            GUILayout.BeginHorizontal();            
            ButtonWithImage(IconConfig.ModernIconPath,MuseumStyle.modern);            
            ButtonWithImage(IconConfig.ClassicalIconPath,MuseumStyle.classical);       
            ButtonWithImage(IconConfig.ChineseIconPath,MuseumStyle.chinese);
            GUILayout.FlexibleSpace();
            GUILayout.EndHorizontal();
            EditorGUILayout.EndVertical();
        }

        private void ButtonWithImage(string path,MuseumStyle style)
        {
            GUILayout.FlexibleSpace();
            GUILayout.BeginHorizontal();
            Style_tex = (Texture)AssetDatabase.LoadAssetAtPath(path, typeof(Texture));            
            if (GUILayout.Button(Style_tex, GUILayout.Height(100), GUILayout.Width(200))) {
                MuseumStyleSelected = style;
            }
            GUILayout.EndHorizontal();
        }

        private void WarningArea() {
            if (ExhibitsNum > 0)
            {
                switch (MuseumStyleSelected)
                {
                    case MuseumStyle.modern:
                        message = "已选择：现代风格";
                        break;
                    case MuseumStyle.classical:
                        message = "已选择：古典风格（功能暂未开启）";
                        break;
                    case MuseumStyle.chinese:
                        message = "已选择：中式风格（功能暂未开启）";
                        break;
                    default:
                        break;
                }
            }
            else {
                message = "请输入正确的展品数量！";
            }
            
            EditorGUILayout.BeginHorizontal();
            //GUILayout.FlexibleSpace();
            EditorGUILayout.HelpBox(message, MessageType.Info);
            //GUILayout.FlexibleSpace();
            EditorGUILayout.EndHorizontal();
        }
        private void GenerateButton() {
            EditorGUILayout.BeginHorizontal();
            GUILayout.FlexibleSpace();            
            if (GUILayout.Button("生成展馆", GUILayout.Width(200))) {
                if (MuseumStyleSelected != MuseumStyle.none)
                {                    
                    GenerateNewMuseum();                    
                }            
            }
            GUILayout.FlexibleSpace();
            EditorGUILayout.EndHorizontal();
        }

        private void GenerateNewMuseum() {
            if (RoomList.Count > 0) {
                for (int i = 0; i < RoomList.Count; i++) {
                    if (RoomList[i] != null) {                        
                        GameObject.DestroyImmediate(RoomList[i]);
                    }
                }                 
            }
            RoomList = new List<GameObject>();

            RoomNum = (int)System.Math.Ceiling((float)ExhibitsNum / 16);
            SetRoomGameObject();
            Vector3 position = Vector3.zero;
            if (RoomNum == 1)
            {
                InstantiateMuseum(OneRoom, position, 1); 
            }
            else if (RoomNum == 2)
            {
                InstantiateMuseum(EnterRoom, position, 1);
                InstantiateMuseum(ExitRoom, GetPosition(position, RoomNum), RoomNum); 
            }
            else {
                InstantiateMuseum(EnterRoom, position, 1);
                for (int i = 2; i < RoomNum; i++) {
                    InstantiateMuseum(ConnectRoom, GetPosition(position, i), i);
                }
                InstantiateMuseum(ExitRoom, GetPosition(position, RoomNum), RoomNum);
            }

           
            SetDirectionalLightGameObject();
            SetFootPointsGameObject();
            SetCameraGameObject();
            Debug.Log("生成成功！");
        }

        private void SetFootPointsGameObject() {
            for (int i = 0; i < RoomNum; i++) {
                GameObject temp = Instantiate(GetGameObject(ModelConfig.FootPointsPrefabPath));
                temp.name = "Footpoints_" + i;
                if (i != 0) {
                   int  childNum = temp.transform.childCount;
                    for (int j = 0; j < childNum; j++) {
                        GameObject tempchild = temp.transform.GetChild(j).gameObject;
                        tempchild.name += ("_" + i);
                        Vector3 tempposition = tempchild.transform.position;
                        tempposition.z += 28.6f;
                        tempchild.transform.position = tempposition;
                        Debug.Log(temp.transform.GetChild(j).position);
                    } 
                }
                temp.transform.position = Vector3.zero;
            }           
        }

        private void SetCameraGameObject()
        {
            var camera = FindObjectsOfType<Camera>();
            if (camera != null) {
                foreach (Camera obj in camera) {
                    DestroyImmediate(obj.gameObject);
                }        
            }
            GameObject footpoints = GameObject.Find("FootPoint_Begin");           
            Vector3 position = footpoints.transform.position;
            position.y += 1.6f;
            GameObject temp = Instantiate(GetGameObject(ModelConfig.CameraPrefabPath), position, quaternion.identity);
            temp.name = "Camera";
        }

        private void SetDirectionalLightGameObject() {
            var light = FindObjectsOfType<Light>();
            if (light != null) {
                foreach (Light obj in light) {
                    DestroyImmediate(obj.gameObject);
                }
            }
            GameObject temp = Instantiate(GetGameObject(ModelConfig.DirectionalLightPrefabPath));
            temp.name = "Directional Light";
        }

        private void InstantiateMuseum(GameObject room, Vector3 position,int index) {
            GameObject temp = (GameObject)Instantiate(room, position, Quaternion.identity);
            string ObjectName = room.name;
            if (index > 1 && index < RoomNum)
            {
                ObjectName = room.name + (index - 1).ToString();
            }   
            
            temp.name = ObjectName;
            RoomList.Add(temp);
        }

        private void SetRoomGameObject() {
            switch (MuseumStyleSelected)
            {
                case MuseumStyle.modern:
                    OneRoom = GetGameObject(ModelConfig.ModernStylePath[0]);
                    EnterRoom = GetGameObject(ModelConfig.ModernStylePath[1]);
                    ConnectRoom = GetGameObject(ModelConfig.ModernStylePath[2]);
                    ExitRoom = GetGameObject(ModelConfig.ModernStylePath[3]);
                    break;
                case MuseumStyle.classical:
                    //OneRoom = GetGameObject(ModelConfig.ClassicalStylePath[0]);
                    //EnterRoom = GetGameObject(ModelConfig.ClassicalStylePath[1]);
                    //ConnectRoom = GetGameObject(ModelConfig.ClassicalStylePath[2]);
                    //ExitRoom = GetGameObject(ModelConfig.ClassicalStylePath[3]);
                    break;
                case MuseumStyle.chinese:
                    //OneRoom = GetGameObject(ModelConfig.ChineseStylePath[0]);
                    //EnterRoom = GetGameObject(ModelConfig.ChineseStylePath[1]);
                    //ConnectRoom = GetGameObject(ModelConfig.ChineseStylePath[2]);
                    //ExitRoom = GetGameObject(ModelConfig.ChineseStylePath[3]);
                    break;
                default:
                    EnterRoom = null;
                    ConnectRoom = null;
                    ExitRoom = null;
                    break;
            }
        }

        private GameObject GetGameObject(string path) { 
                 return (GameObject)AssetDatabase.LoadAssetAtPath(path, typeof(GameObject));
        }

        private Vector3 GetPosition(Vector3 position, int index) {
            switch (MuseumStyleSelected)
            {
                case MuseumStyle.modern:
                    position.z += (index - 1) * 28.4f;
                    break;
                case MuseumStyle.classical:                    
                    break;
                case MuseumStyle.chinese:                    
                    break;
                default:                   
                    break;
            }            
            return position;
        }
    }

}


#endif
