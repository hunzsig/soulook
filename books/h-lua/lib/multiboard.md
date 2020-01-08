multiboard

> 调用：hmultiBoard.method()

---


* **create(key, refreshFrequency, yourData)**
```
根据玩家创建多面板,多面板是可以每个玩家看到的都不一样的
    key 多面板唯一key
    refreshFrequency 刷新频率
    yourData 设置数据的回调,会返回当前的多面板和玩家索引；
             另外你需要设置数据传回到create中来，拼凑多面板数据，二维数组，行列模式
参考例子：
 hmultiBoard.create(
    "player",
    0.75,
    function(mb, curPi)
        --拼凑多面板数据，二维数组，行列模式
        hmultiBoard.setTitle(mb, "玩家属性列表")
        --开始当然是title了
        local data = {
            {
                {value = "玩家", icon = "ReplaceableTextures\\CommandButtons\\BTNRiderlessHorse.blp"},
                {value = "英雄", icon = "ReplaceableTextures\\CommandButtons\\BTNHumanBarracks.blp"},
                {value = "等级", icon = "ReplaceableTextures\\CommandButtons\\BTNBlacksmith.blp"},
                {value = "物攻", icon = "ReplaceableTextures\\CommandButtons\\BTNThoriumMelee.blp"},
                {value = "魔攻", icon = "ReplaceableTextures\\CommandButtons\\BTNArcaniteMelee.blp"},
                {
                    value = "攻速",
                    icon = "ReplaceableTextures\\CommandButtons\\BTNImprovedUnholyStrength.blp"
                },
                {
                    value = "物爆",
                    icon = "ReplaceableTextures\\CommandButtons\\BTNSpiritWalkerMasterTraining.blp"
                },
                {value = "魔爆", icon = "ReplaceableTextures\\CommandButtons\\BTNPriestAdept.blp"},
            }
        }
        --然后是form
        for pi = 1, hplayer.qty_max, 1 do
            local p = hplayer.players[pi]
            if (his.playing(p)) then
                local hero = game.playerHero[pi]
                local avatar = hunit.getAvatar(hero)
                local name = hunit.getName(hero)
                local attack_white = math.floor(hattr.get(hero, "attack_white"))
                local attack_green = math.floor(hattr.get(hero, "attack_green"))
                local attack_speed = math.round(hattr.get(hero, "attack_speed")) .. "%"
                local knocking =
                    math.floor(hattr.get(hero, "knocking_odds")) ..
                    "%击出" .. math.floor(100 + hattr.get(hero, "knocking")) .. "%伤害"
                local violence =
                    math.floor(hattr.get(hero, "violence_odds")) ..
                    "%击出" .. math.floor(100 + hattr.get(hero, "violence")) .. "%伤害"
                local hunt_amplitude = math.round(hattr.get(toherower, "hunt_amplitude")) .. "%"
                table.insert(
                    data,
                    {
                        {value = cj.GetPlayerName(p), icon = nil},
                        {value = name, icon = avatar},
                        {value = "Lv." .. hhero.getCurLevel(hero), icon = nil},
                        {value = attack_white, icon = nil},
                        {value = attack_green, icon = nil},
                        {value = attack_speed, icon = nil},
                        {value = knocking, icon = nil},
                        {value = violence, icon = nil}
                    }
                )
            end
        end
        return data
    end
)
```
