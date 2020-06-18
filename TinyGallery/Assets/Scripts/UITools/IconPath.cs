#if UNITY_DOTSPLAYER_EXPERIMENTAL_FIXED_SIM

#else
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(fileName = "IconData", menuName = "ScriptableObjects/IconPathConfig", order = 2)]
public class IconPath : ScriptableObject
{
    public string ModernIconPath = "Assets/Resources/Toolkit/MuseumStyleIcon/modernstyle.jpg";
    public string ClassicalIconPath = "Assets/Resources/Toolkit/MuseumStyleIcon/classicalstyle.jpg";
    public string ChineseIconPath = "Assets/Resources/Toolkit/MuseumStyleIcon/chinesestyle.jpg";
}
#endif