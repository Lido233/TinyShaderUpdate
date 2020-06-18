 mergeInto(LibraryManager.library, {
    
  SDKInit: function (isMultiPlayers) {
        laya.SetMsgHandler(SendMessage);
        laya.SDKInit(isMultiPlayers);
        },
    
    GameReady: function () {
       laya.GameReady();
        },
    
   GameEnd: function (win) {
        laya.GameEnd(win);
        },
    
   SendInput: function (str) {
        laya.SendInput(UTF8ToString(str));
        },
    
   Broadcast: function (str) {
        laya.Broadcast(UTF8ToString(str));
        },
    
    PopFrame: function () {
        laya.PopFrame();
        },
    
    CloseGame: function () {
        laya.CloseGame();
        },
    
    PlayOther: function () {
       laya.PlayOther();
        },
    
    PlayAgain: function () {
        laya.PlayAgain();
        },
    
    ChangeMic: function (useMic) {
        laya.ChangeMic(useMic);
        },
    
    RefreshMicStatus: function () {
        laya.RefreshMicStatus();
        },
});