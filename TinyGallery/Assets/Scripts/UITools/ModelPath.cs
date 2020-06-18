#if UNITY_DOTSPLAYER_EXPERIMENTAL_FIXED_SIM

#else
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(fileName = "Data", menuName = "ScriptableObjects/ModelPathConfig", order = 1)]
public class ModelPath : ScriptableObject
{
    public string[] ModernStylePath = {
        "Assets/Resources/ModernOneRoom.prefab",
        "Assets/Resources/ModernEnterRoom.prefab",
        "Assets/Resources/ModernConnectRoom.prefab",
        "Assets/Resources/ModernExitRoom.prefab"
    };
    public string[] ClassicalStylePath;
    public string[] ChineseStylePath;
    public string CameraPrefabPath = "Assets/Resources/Camera.prefab";
    public string DirectionalLightPrefabPath = "Assets/Resources/Directional Light.prefab";
    public string FootPointsPrefabPath = "Assets/Resources/FootPoints.prefab";
}
#endif
