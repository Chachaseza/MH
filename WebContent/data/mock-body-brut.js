 /**
 * Name,gender012,type012,rarity,slots,hr,ve,def,max def,fire,water,ice,lightning,dragon,skill1,#,skill2,#,skill3,#,skill4,#,skill5,#,mat1,#,mat2,#,mat3,#,mat4,#
 */
var BODYS_BRUT = ['レザーベスト,0,0,1,0,1,1,1,53,-1,0,0,0,1,採取,2,高速収集,3,気まぐれ,1,,,,,ファンゴの毛皮,1,鉄鉱石,1,,,,,2',
'チェーンベスト,0,0,1,0,1,1,4,56,2,1,1,-2,0,体力,3,腹減り,1,調合成功率,2,,,,,鉄鉱石,2,暖かい毛皮,1,,,,,15',
'ユクモノドウギ,0,0,1,1,1,99,2,54,-1,0,0,1,0,加護,2,広域,1,気配,1,,,,,※港店売り,1,,,,,,,7',
'ロックラックスーツ,0,0,1,1,1,1,5,57,2,-3,0,1,0,こやし,3,腹減り,3,運搬,2,,,,,甲虫の腹袋,1,モンスターの体液,3,氷結晶,3,,,19',
'ハンターメイル,0,1,1,1,1,1,6,100,0,1,0,-3,0,毒,-2,千里眼,1,狩人,1,,,,,鉄鉱石,2,ジャギィの鱗,1,竜骨【小】,2,,,23',
'ハンターレジスト,0,2,1,1,1,1,3,55,1,2,1,-2,1,毒,-2,千里眼,1,狩人,1,,,,,鉄鉱石,2,ジャギィの鱗,1,竜骨【小】,2,,,28',
'アロイメイル,0,1,1,1,1,3,6,100,-1,1,-1,-2,0,達人,2,風圧,3,研ぎ師,1,採取,-2,,,マカライト鉱石,3,シーブライト鉱石,2,鉄鉱石,2,,,33',
'アロイレジスト,0,2,1,1,1,3,3,55,0,2,0,-1,1,装填速度,1,散弾強化,2,散弾追加,2,採取,-2,,,マカライト鉱石,3,シーブライト鉱石,2,鉄鉱石,2,,,38',
'ボーンメイル,0,1,1,1,1,2,7,99,1,0,-2,-1,0,睡眠,-2,KO,2,笛,1,観察眼,1,,,大きな骨,1,なぞの骨,4,とがった牙,2,,,43',
'ボーンレジスト,0,2,1,1,1,2,4,55,2,1,-1,0,1,睡眠,-2,KO,2,笛,1,観察眼,1,,,大きな骨,1,なぞの骨,4,とがった牙,2,,,48',
'ブナハスーツ,0,1,2,0,1,3,9,99,-4,-1,-1,2,2,麻痺,1,攻撃,-2,納刀,2,特殊攻撃,2,,,飛甲虫の甲殻,2,飛甲虫の羽,3,モンスターの体液,2,キラビートル,1,53',
'ブナハベスト,0,2,2,0,1,3,5,57,-3,0,0,3,3,麻痺,1,攻撃,-2,納刀,3,特殊攻撃,1,,,飛甲虫の甲殻,2,飛甲虫の羽,3,モンスターの体液,2,キラビートル,1,58',
'リノプロメイル,0,1,2,1,1,2,9,101,1,-1,-1,-1,1,耐泥耐雪,2,KO,1,氷耐性,-2,砲術,2,,,草食竜の頭殻,1,草食竜の甲殻,2,大地の結晶,2,,,63',
'リノプロレジスト,0,2,2,1,1,2,5,56,2,0,0,0,2,耐泥耐雪,2,KO,1,氷耐性,-2,砲術,1,,,草食竜の頭殻,1,草食竜の甲殻,2,大地の結晶,2,,,68',
'ジャギィメイル,0,1,2,0,1,2,10,100,-2,0,0,0,1,気絶,2,攻撃,2,効果持続,-2,食いしん坊,2,,,王者のエリマキ,1,狗竜の爪,2,ジャギィの皮,3,鉄鉱石,3,73',
'ジャギィレジスト,0,2,2,0,1,2,5,56,-1,1,1,1,2,気絶,2,攻撃,2,効果持続,-2,食いしん坊,2,,,王者のエリマキ,1,狗竜の爪,2,ジャギィの皮,3,鉄鉱石,3,78',
'アシラメイル,0,1,2,1,1,2,11,101,-2,1,-1,0,1,麻痺,-2,防御,2,回復量,1,盗み無効,3,,,青熊獣の毛,3,青熊獣の甲殻,1,飛甲虫の甲殻,2,光蟲,3,83',
'アシラレジスト,0,2,2,1,1,2,6,56,-1,2,0,1,2,麻痺,-2,防御,2,回復量,2,盗み無効,2,,,青熊獣の毛,3,青熊獣の甲殻,1,飛甲虫の甲殻,2,光蟲,3,88',
'フロギィメイル,0,1,2,1,1,3,12,100,1,-1,-2,0,1,毒,1,気絶,-2,特殊攻撃,1,斬れ味,1,采配,2,毒狗竜の皮,2,毒狗竜の腕甲,1,毒袋,3,氷結晶,5,93',
'フロギィレジスト,0,2,2,1,1,3,6,57,2,0,-1,1,2,毒,2,気絶,-2,特殊攻撃,1,通常弾強化,2,采配,2,毒狗竜の皮,2,毒狗竜の腕甲,1,毒袋,3,氷結晶,5,98',
'ペッコメイル,0,1,2,1,1,3,14,100,2,-1,-3,0,0,風圧,2,笛,2,広域,1,食事,-2,,,極彩色の羽根,1,彩鳥の鱗,2,竜骨【中】,2,セッチャクロアリ,3,103',
'ペッコレジスト,0,2,2,1,1,3,7,57,3,0,-2,1,1,風圧,2,散弾強化,2,広域,1,食事,-2,,,極彩色の羽根,1,彩鳥の鱗,2,竜骨【中】,2,セッチャクロアリ,3,108',
'ルドロスメイル,0,1,2,1,1,3,14,100,-3,2,-1,-1,1,耐暑,2,スタミナ,2,水属性攻撃,2,雷耐性,-2,酸素,1,海綿質の皮,2,水獣の爪,1,水生獣の皮,3,キラビートル,2,113',
'ルドロスレジスト,0,2,2,0,1,3,7,57,-2,3,0,0,2,耐暑,2,スタミナ,2,水属性攻撃,2,雷耐性,-2,酸素,2,海綿質の皮,2,水獣の爪,1,水生獣の皮,3,キラビートル,2,118',
'バギィメイル,0,1,2,1,1,4,15,101,-2,0,1,0,0,睡眠,2,回復速度,2,火属性攻撃,-2,号令,2,,,王者のトサカ,1,眠狗竜の爪,1,バギィの皮,2,シーブライト鉱石,2,123',
'バギィレジスト,0,2,2,1,1,4,8,57,-1,1,2,1,1,睡眠,2,回復速度,2,火属性攻撃,-1,号令,2,,,王者のトサカ,1,眠狗竜の爪,1,バギィの皮,2,シーブライト鉱石,2,128',
'ウルクメイル,0,1,2,1,1,4,15,101,-2,0,1,-1,0,耐暑,-2,耐寒,2,回避距離,2,効果持続,2,,,白兎獣の腹甲,2,白兎獣の毛,2,バギィの鱗,4,キラビートル,3,133',
'ウルクレジスト,0,2,2,1,1,4,8,57,-1,1,2,0,1,耐暑,-2,耐寒,2,回避距離,1,効果持続,3,,,白兎獣の腹甲,2,白兎獣の毛,2,バギィの鱗,4,キラビートル,3,138',
'ボロスメイル,0,1,2,0,1,3,16,100,-4,4,-2,1,0,攻撃,2,防御,2,ガード性能,2,腹減り,-2,,,土砂竜の頭殻,1,土砂竜の背甲,2,肥沃なドロ,2,キラビートル,2,143',
'ボロスレジスト,0,2,2,0,1,3,8,57,-3,5,-1,2,1,攻撃,1,防御,2,精密射撃,2,腹減り,-2,,,土砂竜の頭殻,1,土砂竜の背甲,2,肥沃なドロ,2,キラビートル,2,148',
'ラングロメイル,0,1,2,1,2,5,16,100,1,-3,-1,0,1,攻撃,2,耐震,1,耐寒,-2,回避性能,3,,,赤甲獣の甲殻,3,赤甲獣の蛇腹甲,1,大きな骨,2,溶岩獣の鱗,4,153',
'ラングロレジスト,0,2,2,1,2,5,8,56,2,-2,0,1,2,攻撃,2,耐寒,-2,回避性能,2,通常弾強化,1,,,赤甲獣の甲殻,3,赤甲獣の蛇腹甲,1,大きな骨,2,溶岩獣の鱗,4,158',
'ガブルメイル,0,1,2,0,1,4,17,101,-2,2,0,-3,1,回復速度,-2,達人,3,食事,1,泳ぎ,3,,,灯魚竜の皮,3,灯魚竜のヒレ,2,灯魚竜の棘,2,竜骨【大】,3,163',
'ガブルレジスト,0,2,2,0,1,4,9,58,-1,3,1,-2,2,回復速度,-2,達人,3,食事,1,泳ぎ,3,,,灯魚竜の皮,3,灯魚竜のヒレ,2,灯魚竜の棘,2,竜骨【大】,3,168',
'レイアメイル,0,1,2,0,1,4,18,100,2,0,0,-2,-3,体力,2,回復速度,-2,火属性攻撃,2,回復量,2,,,雌火竜の鱗,4,雌火竜の翼膜,3,火竜の骨髄,1,マカライト鉱石,5,173',
'レイアレジスト,0,2,2,0,1,4,9,57,3,1,1,-1,-2,体力,2,回復速度,-2,火属性攻撃,1,回復量,2,,,雌火竜の鱗,4,雌火竜の翼膜,3,火竜の骨髄,1,マカライト鉱石,5,178',
'ネブラメイル,0,1,2,1,2,4,18,100,-4,0,1,1,-1,加護,-2,聴覚保護,2,特殊攻撃,2,研ぎ師,1,,,毒怪竜の爪,2,毒怪竜の皮,3,不気味な毒腺,3,アイシスメタル,4,183',
'ネブラレジスト,0,2,2,1,2,4,9,57,-3,1,2,2,0,加護,-2,聴覚保護,2,特殊攻撃,1,装填速度,1,,,毒怪竜の爪,2,毒怪竜の皮,3,不気味な毒腺,3,アイシスメタル,4,188',
'インゴットメイル,0,1,2,1,2,5,19,99,-2,-2,0,2,0,納刀,1,ガード強化,1,雷属性攻撃,2,気まぐれ,-2,,,ドラグライト鉱石,4,紅蓮石,1,シーブライト鉱石,1,ライトクリスタル,1,193',
'インゴットレジスト,0,2,2,1,2,5,10,57,-1,-1,1,3,1,雷属性攻撃,2,反動,1,散弾強化,1,気まぐれ,-2,,,ドラグライト鉱石,4,紅蓮石,1,シーブライト鉱石,1,ライトクリスタル,1,198',
'ベリオメイル,0,1,3,1,2,5,20,100,-4,0,2,-1,0,体術,2,気力回復,-2,回避性能,1,氷属性攻撃,1,,,氷牙竜の甲殻,3,氷牙竜の尻尾,1,氷牙竜の棘,1,ドスヘラクレス,3,203',
'ベリオレジスト,0,2,3,1,2,5,10,56,-3,1,3,0,1,体術,2,気力回復,-2,回避性能,1,氷属性攻撃,1,,,氷牙竜の甲殻,3,氷牙竜の尻尾,1,氷牙竜の棘,1,ドスヘラクレス,3,208',
'ハプルメイル,0,1,2,1,2,5,21,99,2,0,-4,-2,1,耐泥耐雪,2,納刀,1,腹減り,-2,食事,2,,,潜口竜の皮,4,潜口竜の爪,1,潜口竜の甲殻,3,鮮やかな体液,4,214',
'ハプルレジスト,0,2,2,1,2,5,11,57,3,1,-3,-1,2,耐泥耐雪,3,納刀,1,腹減り,-2,食事,1,,,潜口竜の皮,4,潜口竜の爪,1,潜口竜の甲殻,3,鮮やかな体液,4,219',
'ギルドバードスーツ,1,1,3,0,2,5,21,99,0,0,0,0,0,体力,1,気配,-2,運気,2,千里眼,4,,,飛竜のコイン,2,海竜のコイン,3,牙獣のコイン,4,火竜の翼膜,2,224',
'ギルドバードベスト,1,2,3,0,2,5,11,57,1,1,1,1,1,体力,1,気配,-2,運気,2,千里眼,4,,,飛竜のコイン,2,海竜のコイン,3,牙獣のコイン,4,火竜の翼膜,2,229',
'スカラースーツ,2,1,3,0,2,5,21,99,0,0,0,0,0,体力,1,気配,-2,運気,2,千里眼,4,,,飛竜のコイン,2,海竜のコイン,3,牙獣のコイン,4,火竜の翼膜,2,234',
'スカラーベスト,2,2,3,0,2,5,11,57,1,1,1,1,1,体力,1,気配,-2,運気,2,千里眼,4,,,飛竜のコイン,2,海竜のコイン,3,牙獣のコイン,4,火竜の翼膜,2,239',
'ラギアメイル,0,1,3,1,2,5,22,100,-4,1,-1,2,-1,溜め短縮,2,痛撃,1,特殊攻撃,-2,水流,3,,,海竜の皮,3,海竜の背電殻,1,海竜の鱗,4,ライトクリスタル,6,244',
'ラギアレジスト,0,2,3,1,2,5,11,57,-3,2,0,3,0,痛撃,1,特殊攻撃,-2,通常弾強化,2,水流,3,,,海竜の皮,3,海竜の背電殻,1,海竜の鱗,4,ライトクリスタル,6,249',
'レウスメイル,0,1,3,0,2,5,22,100,2,0,0,-2,-3,攻撃,2,火属性攻撃,2,研ぎ師,2,回復量,-2,,,火竜の甲殻,2,火竜の鱗,4,火竜の翼膜,3,ドラグライト鉱石,3,254',
'レウスレジスト,0,2,3,0,2,5,11,57,3,1,1,-1,-2,攻撃,2,火属性攻撃,1,貫通弾強化,2,回復量,-2,,,火竜の甲殻,2,火竜の鱗,4,火竜の翼膜,3,ドラグライト鉱石,3,259',
'ドボルメイル,0,1,3,1,2,6,24,102,-4,2,-2,1,1,攻撃,1,回復速度,2,達人,-2,逆境,3,,,尾槌竜のコブ,3,尾槌竜の角,2,尾槌竜の甲殻,4,ファンゴの毛皮,4,264',
'ドボルレジスト,0,2,3,1,2,6,12,58,-3,3,-1,2,2,攻撃,1,回復速度,2,達人,-2,逆境,3,,,尾槌竜のコブ,3,尾槌竜の角,2,尾槌竜の甲殻,4,ファンゴの毛皮,4,269',
'ディアブロメイル,0,1,3,0,2,5,24,102,2,0,-4,0,0,溜め短縮,2,達人,2,耐震,2,研ぎ師,-2,,,ねじれた角,2,角竜の背甲,3,角竜の甲殻,2,毒狗竜の腕甲,3,274',
'ディアブロレジスト,0,2,3,0,2,5,12,58,3,1,-3,1,1,達人,2,耐震,2,精密射撃,-2,貫通弾強化,3,,,ねじれた角,2,角竜の背甲,3,角竜の甲殻,2,毒狗竜の腕甲,3,279',
'ガンキンメイル,0,1,3,1,2,5,24,102,2,-4,-1,1,-2,防御,2,減気攻撃,2,爆弾強化,2,泳ぎ,-2,,,爆鎚竜の顎,1,爆鎚竜の耐熱殻,1,爆鎚竜の甲殻,3,赤甲獣の甲殻,2,284',
'ガンキンレジスト,0,2,3,1,2,5,12,58,3,-3,0,2,-1,防御,2,通常弾強化,2,爆弾強化,2,泳ぎ,-2,,,爆鎚竜の顎,1,爆鎚竜の耐熱殻,1,爆鎚竜の甲殻,3,赤甲獣の甲殻,2,289',
'アグナメイル,0,1,3,1,2,5,24,102,2,-4,-1,0,0,ガード性能,2,火属性攻撃,1,斬れ味,2,燃鱗,3,底力,-1,炎戈竜の皮,4,炎戈竜のヒレ,2,炎戈竜の甲殻,5,毒狗竜の皮,5,294',
'アグナレジスト,0,2,3,1,2,5,12,58,3,-3,0,1,1,火属性攻撃,2,精密射撃,2,通常弾強化,1,燃鱗,3,底力,-1,炎戈竜の皮,4,炎戈竜のヒレ,2,炎戈竜の甲殻,5,毒狗竜の皮,5,299',
'ヘリオスメイル,1,1,3,1,99,5,26,102,0,3,1,-2,-5,加護,-2,重撃,2,聴覚保護,1,水属性攻撃,3,,,大海龍の鱗,2,大海龍の鎧毛,2,深淵の龍玉,1,,,304',
'ヘリオスレジスト,1,2,3,1,99,5,13,58,1,4,2,-1,-4,加護,-2,重撃,2,聴覚保護,2,水属性攻撃,3,,,大海龍の鱗,2,大海龍の鎧毛,2,深淵の龍玉,1,,,309',
'セレネメイル,2,1,3,1,99,5,26,102,0,3,1,-2,-5,加護,-2,重撃,2,聴覚保護,1,水属性攻撃,3,,,大海龍の鱗,2,大海龍の鎧毛,2,深淵の龍玉,1,,,314',
'セレネレジスト,2,2,3,1,99,5,13,58,1,4,2,-1,-4,加護,-2,重撃,2,聴覚保護,2,水属性攻撃,3,,,大海龍の鱗,2,大海龍の鎧毛,2,深淵の龍玉,1,,,319',
'レザーＳメイル,0,1,4,1,3,6,16,101,-2,0,0,0,2,採取,2,高速収集,1,気まぐれ,1,,,,,上質な毛皮,1,カブレライト鉱石,1,ファンゴの毛皮,3,,,324',
'レザーＳレジスト,0,2,4,1,3,6,8,57,-1,1,1,1,3,採取,2,高速収集,1,気まぐれ,1,,,,,上質な毛皮,1,カブレライト鉱石,1,ファンゴの毛皮,3,,,329',
'ユクモノドウギ・天,0,1,4,2,3,6,18,101,-1,0,0,2,0,加護,2,気配,1,研ぎ師,1,広域,1,,,王族カナブン,2,暖かい毛皮,3,丸鳥の羽,3,,,334',
'ユクモノドウギ・地,0,2,4,1,3,6,9,57,0,1,1,3,1,加護,2,気配,2,精密射撃,1,広域,2,,,王族カナブン,2,暖かい毛皮,3,丸鳥の羽,3,,,339',
'チェーンＳメイル,0,1,4,2,3,6,22,101,2,2,1,-3,0,体力,2,調合成功率,3,調合数,1,,,,,カブレライト鉱石,2,シーブライト鉱石,1,大地の結晶,2,王族カナブン,2,344',
'チェーンＳレジスト,0,2,4,2,3,6,11,57,3,3,2,-2,1,体力,2,調合成功率,2,調合数,1,,,,,カブレライト鉱石,2,シーブライト鉱石,1,大地の結晶,2,王族カナブン,2,349',
'ロックラックＳスーツ,0,1,4,1,3,6,18,101,2,-3,0,1,0,こやし,2,千里眼,4,運搬,3,,,,,上質な腹袋,1,モンスターの濃汁,2,氷結晶,5,,,353',
'ロックラックＳベスト,0,2,4,1,3,6,9,57,3,-2,1,2,1,こやし,2,千里眼,4,運搬,3,,,,,上質な腹袋,1,モンスターの濃汁,2,氷結晶,5,,,356',
'ハンターＳメイル,0,1,4,1,3,6,24,101,0,2,0,-4,0,毒,-2,千里眼,2,狩人,2,高速設置,1,,,カブレライト鉱石,1,ジャギィの上鱗,3,アイシスメタル,3,鉄鉱石,5,360',
'ハンターＳレジスト,0,2,4,1,3,6,12,57,1,3,1,-3,1,毒,-2,千里眼,2,狩人,2,高速設置,1,,,カブレライト鉱石,1,ジャギィの上鱗,3,アイシスメタル,3,鉄鉱石,5,365',
'ボーンＳメイル,0,1,4,1,3,6,26,101,2,0,-3,-1,0,睡眠,-2,KO,1,笛,1,効果持続,1,観察眼,4,堅牢な骨,1,竜骨【小】,5,とがった牙,5,,,376',
'ボーンＳレジスト,0,2,4,1,3,6,13,57,3,1,-2,0,1,睡眠,-2,KO,2,笛,1,効果持続,1,観察眼,3,堅牢な骨,1,竜骨【小】,5,とがった牙,5,,,381',
'アロイＳメイル,0,1,4,1,3,6,28,101,-1,2,-2,-3,0,達人,3,風圧,3,研ぎ師,1,採取,-2,,,デプスライト鉱石,2,カブレライト鉱石,2,マカライト鉱石,7,鉄鉱石,10,386',
'アロイＳレジスト,0,2,4,1,3,6,14,57,0,3,-1,-2,1,装填速度,4,散弾強化,2,散弾追加,2,採取,-1,,,デプスライト鉱石,2,カブレライト鉱石,2,マカライト鉱石,7,鉄鉱石,10,391',
'ブナハＳスーツ,0,1,4,0,3,6,32,101,-5,-1,-1,2,3,麻痺,2,攻撃,-2,納刀,2,特殊攻撃,3,,,飛甲虫の堅殻,2,飛甲虫の甲殻,3,モンスターの濃汁,2,王族カナブン,2,396',
'ブナハＳベスト,0,2,4,0,3,6,16,57,-4,0,0,3,4,麻痺,2,攻撃,-2,納刀,1,特殊攻撃,3,,,飛甲虫の堅殻,2,飛甲虫の甲殻,3,モンスターの濃汁,2,王族カナブン,2,401',
'リノプロＳメイル,0,1,4,1,3,6,32,101,2,-1,-1,-1,1,気絶,-3,耐泥耐雪,2,溜め短縮,2,KO,1,砲術,1,草食竜の堅殻,1,草食竜の頭殻,1,カブレライト鉱石,2,,,406',
'リノプロＳレジスト,0,2,4,1,3,6,16,57,3,0,0,0,2,気絶,-3,耐泥耐雪,2,溜め短縮,1,KO,1,砲術,2,草食竜の堅殻,1,草食竜の頭殻,1,カブレライト鉱石,2,,,411',
'ズワロマント,0,1,4,0,3,6,35,102,-2,3,-1,0,1,水属性攻撃,4,水耐性,7,,,,,,,垂皮竜の上皮,4,デプスライト鉱石,1,ファンゴの毛皮,3,,,416',
'ズワロケープ,0,2,4,0,3,6,18,58,-1,4,0,1,2,水属性攻撃,3,水耐性,7,,,,,,,垂皮竜の上皮,4,デプスライト鉱石,1,ファンゴの毛皮,3,,,418',
'撫子【花衣】,2,1,5,0,3,6,35,102,0,0,0,0,0,毒,-2,広域,3,観察眼,1,千里眼,3,,,落陽草の花,1,マンドラゴラ,3,ライトクリスタル,6,アイシスメタル,1,420',
'桔梗【花衣】,2,2,5,0,3,6,18,58,1,1,1,1,1,毒,-2,広域,3,観察眼,1,千里眼,3,,,落陽草の花,1,マンドラゴラ,3,ライトクリスタル,6,アイシスメタル,1,425',
'ジャギィＳメイル,0,1,4,0,3,6,36,101,-4,0,0,0,2,気絶,4,攻撃,3,効果持続,-2,食いしん坊,2,,,狗竜の尖爪,4,狗竜の上皮,4,ジャギィの皮,3,カブレライト鉱石,2,430',
'ジャギィＳレジスト,0,2,4,0,3,6,18,57,-3,1,1,1,3,気絶,4,攻撃,3,効果持続,-2,食いしん坊,2,,,狗竜の尖爪,4,狗竜の上皮,4,ジャギィの皮,3,カブレライト鉱石,2,435',
'アシラＳメイル,0,1,4,0,3,6,37,102,-3,2,-2,0,2,麻痺,-2,防御,4,減気攻撃,2,回復量,2,盗み無効,1,青熊獣の剛毛,5,青熊獣の堅殻,2,飛甲虫の堅殻,3,王族カナブン,2,440',
'アシラＳレジスト,0,2,4,0,3,6,19,58,-2,3,-1,1,3,麻痺,-2,防御,4,減気攻撃,2,回復量,1,盗み無効,2,青熊獣の剛毛,5,青熊獣の堅殻,2,飛甲虫の堅殻,3,王族カナブン,2,445',
'フロギィＳメイル,0,1,4,1,3,6,38,101,2,-2,-3,0,2,毒,1,防御,-2,斬れ味,2,食事,2,采配,2,猛毒袋,2,毒狗竜の腕甲,2,フロギィの上鱗,2,ドスヘラクレス,6,450',
'フロギィＳレジスト,0,2,4,1,3,6,19,57,3,-1,-2,1,3,毒,1,防御,-2,通常弾強化,2,食事,2,采配,2,猛毒袋,2,毒狗竜の腕甲,2,フロギィの上鱗,2,ドスヘラクレス,6,455',
'バギィＳメイル,0,1,4,0,4,7,40,103,-4,0,2,0,1,睡眠,1,回復速度,2,火属性攻撃,-2,氷属性攻撃,4,号令,2,眠狗竜の尖爪,4,王者のトサカ,1,鳥竜玉,3,アイシスメタル,4,460',
'バギィＳレジスト,0,2,4,0,4,7,20,58,-3,1,3,1,2,睡眠,1,回復速度,2,火属性攻撃,-2,氷属性攻撃,4,号令,2,眠狗竜の尖爪,4,王者のトサカ,1,鳥竜玉,3,アイシスメタル,4,465',
'ウルクＳメイル,0,1,4,1,4,7,40,103,-3,0,2,-1,0,達人,1,耐暑,-2,耐寒,1,回避距離,3,効果持続,2,白兎獣の堅腹甲,3,白兎獣の剛毛,3,バギィの上鱗,6,王族カナブン,2,470',
'ウルクＳレジスト,0,2,4,1,4,7,20,58,-2,1,3,0,1,達人,1,耐暑,-2,耐寒,1,回避距離,3,効果持続,2,白兎獣の堅腹甲,3,白兎獣の剛毛,3,バギィの上鱗,6,王族カナブン,2,475',
'ペッコＳメイル,0,1,5,1,3,6,41,102,3,-1,-4,0,0,氷耐性,-2,笛,1,広域,4,千里眼,2,,,彩鳥の上鱗,3,極彩色の羽根,2,上竜骨,1,王族カナブン,2,483',
'ペッコＳレジスト,0,2,5,1,3,6,21,58,4,0,-3,1,1,氷耐性,-2,散弾強化,1,広域,4,千里眼,2,,,彩鳥の上鱗,3,極彩色の羽根,2,上竜骨,1,王族カナブン,2,488',
'ペッコＵメイル,0,1,6,1,3,6,41,102,-1,0,-4,3,0,対防御DOWN,2,達人,1,風圧,2,氷属性攻撃,-2,広域,1,紅彩鳥の上鱗,3,極彩色の羽根,2,尖竜骨,1,王族カナブン,2,493',
'ペッコＵレジスト,0,2,6,1,3,6,21,58,0,1,-3,4,1,対防御DOWN,3,達人,1,風圧,2,氷属性攻撃,-2,広域,1,紅彩鳥の上鱗,3,極彩色の羽根,2,尖竜骨,1,王族カナブン,2,498',
'ルドロスＳメイル,0,1,5,1,3,6,42,103,-4,3,-1,-1,1,聴覚保護,1,スタミナ,2,水属性攻撃,2,雷属性攻撃,-2,酸素,2,海綿質の上皮,3,水生獣の上皮,3,水生獣の皮,6,王族カナブン,2,503',
'ルドロスＳレジスト,0,2,5,1,3,6,21,58,-3,4,0,0,2,聴覚保護,1,スタミナ,2,水属性攻撃,2,雷属性攻撃,-2,酸素,2,海綿質の上皮,3,水生獣の上皮,3,水生獣の皮,6,王族カナブン,2,508',
'ルドロスＵメイル,0,1,6,2,3,6,42,103,-4,3,0,-2,1,スタミナ,1,特殊攻撃,1,雷耐性,-2,腹減り,3,,,海綿質の紫皮,3,水生獣の上皮,3,水生獣の皮,6,王族カナブン,2,513',
'ルドロスＵレジスト,0,2,6,2,3,6,21,58,-3,4,1,-1,2,スタミナ,1,特殊攻撃,1,雷耐性,-2,腹減り,3,,,海綿質の紫皮,3,水生獣の上皮,3,水生獣の皮,6,王族カナブン,2,518',
'ラングロＳメイル,0,1,4,1,3,7,44,103,2,-4,-1,0,1,攻撃,4,耐震,1,耐寒,-2,回避性能,2,,,赤甲獣の堅殻,3,赤甲獣の蛇腹甲,4,堅牢な骨,2,カブレライト鉱石,3,523',
'ラングロＳレジスト,0,2,4,1,3,7,22,58,3,-3,0,1,2,攻撃,4,耐震,1,耐寒,-2,回避性能,2,,,赤甲獣の堅殻,3,赤甲獣の蛇腹甲,4,堅牢な骨,2,カブレライト鉱石,3,528',
'ロワーガペット,1,1,5,1,4,7,46,101,-4,0,-1,3,1,抗菌,2,加護,-1,聴覚保護,2,龍属性攻撃,2,,,マレコガネ,2,オオクワアゲハ,2,ハナスズムシ,2,セッチャクロアリ,10,533',
'ロワーガペクトス,1,2,5,1,4,7,23,57,-3,1,0,4,2,抗菌,2,加護,-1,聴覚保護,2,龍属性攻撃,1,,,マレコガネ,2,オオクワアゲハ,2,ハナスズムシ,2,セッチャクロアリ,10,538',
'ファルメルペット,2,1,5,1,4,7,46,101,-4,0,-1,3,1,抗菌,2,加護,-1,聴覚保護,2,龍属性攻撃,2,,,マレコガネ,2,オオクワアゲハ,2,ハナスズムシ,2,セッチャクロアリ,10,543',
'ファルメルペクトス,2,2,5,1,4,7,23,57,-3,1,0,4,2,抗菌,2,加護,-1,聴覚保護,2,龍属性攻撃,1,,,マレコガネ,2,オオクワアゲハ,2,ハナスズムシ,2,セッチャクロアリ,10,548',
'アーティアメイル,0,1,5,1,4,7,46,105,0,-3,2,-3,3,気力回復,2,ガード強化,4,,,,,,,大きな太古の破片,3,さびた破片,5,ユニオン鉱石,3,カブレライト鉱石,6,552',
'アーティアレジスト,0,2,5,1,4,7,23,59,1,-2,3,-2,4,反動,3,精密射撃,5,,,,,,,大きな太古の破片,3,さびた破片,5,ユニオン鉱石,3,カブレライト鉱石,6,555',
'ボロスＳメイル,0,1,5,2,3,6,46,105,-4,4,-2,1,0,攻撃,1,防御,1,ガード性能,2,腹減り,-2,,,土砂竜の堅甲,4,土砂竜の頭殻,3,肥沃なドロ,5,草食竜の堅殻,3,559',
'ボロスＳレジスト,0,2,5,2,3,6,23,59,-3,5,-1,2,1,攻撃,1,防御,1,精密射撃,2,腹減り,-2,,,土砂竜の堅甲,4,土砂竜の頭殻,3,肥沃なドロ,5,草食竜の堅殻,3,564',
'ボロスＵメイル,0,1,6,2,4,7,48,105,-4,1,3,-2,0,防御,3,火属性攻撃,-2,氷属性攻撃,1,底力,1,,,氷砕竜の頭殻,3,氷砕竜の堅甲,4,凍った粘液塊,5,白兎獣の腹甲,4,569',
'ボロスＵレジスト,0,2,6,0,4,7,24,59,-3,2,4,-1,1,防御,4,火属性攻撃,-2,氷属性攻撃,2,底力,3,,,氷砕竜の頭殻,3,氷砕竜の堅甲,4,凍った粘液塊,5,白兎獣の腹甲,4,574',
'ガブルＳメイル,0,1,5,1,3,7,47,102,-2,3,0,-4,1,回復速度,-2,達人,3,食事,1,泳ぎ,2,,,灯魚竜の上ヒレ,2,灯魚竜の上棘,2,灯魚竜の皮,3,鳥竜玉,3,579',
'ガブルＳレジスト,0,2,5,1,3,7,24,58,-1,4,1,-3,2,回復速度,-2,達人,3,食事,1,泳ぎ,2,,,灯魚竜の上ヒレ,2,灯魚竜の上棘,2,灯魚竜の皮,3,鳥竜玉,3,584',
'マギュルトロンコ,0,1,5,1,3,6,48,105,-4,1,2,0,0,回復速度,2,溜め短縮,1,ガード性能,-2,調合成功率,2,高速設置,2,王族カナブン,3,ペピポパンプキン,4,秘薬,2,サボテンの花,15,589',
'マギュルシュタム,0,2,5,1,3,6,24,59,-3,2,3,1,1,回復速度,2,溜め短縮,1,精密射撃,-2,調合成功率,2,高速設置,2,王族カナブン,3,ペピポパンプキン,4,秘薬,2,サボテンの花,15,594',
'ギルドバードＳスーツ,1,1,5,0,3,99,48,105,0,0,0,0,0,体力,2,気配,-2,運気,2,千里眼,4,,,闘技王のコイン,2,水竜のコイン,3,海竜のコイン,3,勇気の証,2,599',
'ギルドバードＳベスト,1,2,5,0,3,99,24,59,1,1,1,1,1,体力,2,気配,-2,運気,2,千里眼,3,,,闘技王のコイン,2,水竜のコイン,3,海竜のコイン,3,勇気の証,2,604',
'スカラーＳスーツ,2,1,5,0,3,99,48,105,0,0,0,0,0,体力,2,気配,-2,運気,2,千里眼,4,,,闘技王のコイン,2,水竜のコイン,3,海竜のコイン,3,勇気の証,2,609',
'スカラーＳベスト,2,2,5,0,3,99,24,59,1,1,1,1,1,体力,2,気配,-2,運気,2,千里眼,3,,,闘技王のコイン,2,水竜のコイン,3,海竜のコイン,3,勇気の証,2,614',
'インゴットＳメイル,0,1,5,1,4,8,48,103,-2,-3,0,3,1,納刀,1,ガード強化,2,雷属性攻撃,2,気まぐれ,-2,,,ユニオン鉱石,3,獄炎石,2,デプスライト鉱石,2,カブレライト鉱石,5,619',
'インゴットＳレジスト,0,2,5,1,4,8,24,58,-1,-2,1,4,2,雷属性攻撃,2,反動,2,散弾強化,1,気まぐれ,-2,,,ユニオン鉱石,3,獄炎石,2,デプスライト鉱石,2,カブレライト鉱石,5,624',
'レイアＳメイル,0,1,5,1,3,6,49,106,3,0,0,-2,-4,体力,1,火属性攻撃,2,水属性攻撃,-2,回復量,4,,,雌火竜の上鱗,4,火竜の延髄,1,雌火竜の逆鱗,1,紅蓮石,2,629',
'レイアＳレジスト,0,2,5,1,3,6,25,60,4,1,1,-1,-3,体力,1,火属性攻撃,3,水属性攻撃,-2,回復量,2,,,雌火竜の上鱗,4,火竜の延髄,1,雌火竜の逆鱗,1,紅蓮石,2,634',
'リオハートメイル,0,1,6,1,3,6,49,106,3,0,0,-2,-4,風圧,3,気配,-1,火属性攻撃,3,底力,2,,,桜火竜の上鱗,3,桜火竜の堅殻,2,カブレライト鉱石,4,雌火竜の紅玉,1,639',
'リオハートレジスト,0,2,6,1,3,6,25,60,4,1,1,-1,-3,風圧,3,気配,-1,火属性攻撃,2,底力,2,,,桜火竜の上鱗,3,桜火竜の堅殻,2,カブレライト鉱石,4,雌火竜の紅玉,1,644',
'ネブラＳメイル,0,1,5,1,4,7,49,104,-5,0,2,2,-1,加護,-2,聴覚保護,2,特殊攻撃,2,研ぎ師,1,,,毒怪竜の鋭爪,2,毒怪竜の上皮,4,不気味な毒腺,3,ライトクリスタル,2,649',
'ネブラＳレジスト,0,2,5,1,4,7,25,59,-4,1,3,3,0,加護,-2,聴覚保護,1,特殊攻撃,2,装填速度,2,,,毒怪竜の鋭爪,2,毒怪竜の上皮,4,不気味な毒腺,3,ライトクリスタル,2,654',
'ネブラＵメイル,0,1,6,2,4,7,49,104,0,-5,1,3,-1,溜め短縮,1,減気攻撃,1,雷属性攻撃,1,氷属性攻撃,-2,,,電怪竜の鋭爪,2,電怪竜の上皮,4,竜玉,1,眠狗竜の皮,5,659',
'ネブラＵレジスト,0,2,6,1,4,7,25,59,1,-4,2,4,0,溜め短縮,1,減気攻撃,1,雷属性攻撃,1,氷属性攻撃,-3,,,電怪竜の鋭爪,2,電怪竜の上皮,4,竜玉,1,眠狗竜の皮,5,664',
'ガノスメイル,0,1,5,1,3,7,49,104,-4,3,2,-5,2,耐暑,3,スタミナ,2,捕獲,3,高速設置,1,,,水竜の上ビレ,3,水竜の翼膜,2,モンスターの濃汁,2,王族カナブン,3,669',
'ガノスレジスト,0,2,5,1,3,7,25,59,-3,4,3,-4,3,耐暑,3,スタミナ,2,捕獲,3,高速設置,1,,,水竜の上ビレ,3,水竜の翼膜,2,モンスターの濃汁,2,王族カナブン,3,673',
'ベリオＳメイル,0,1,5,2,4,8,50,105,-5,0,3,-1,0,体術,2,気力回復,-2,回避性能,2,氷属性攻撃,1,,,氷牙竜の堅殻,4,氷牙竜の尻尾,1,竜玉,1,白兎獣の毛,6,677',
'ベリオＳレジスト,0,2,5,2,4,8,25,59,-4,1,4,0,1,体術,2,気力回復,-2,回避性能,1,氷属性攻撃,1,,,氷牙竜の堅殻,4,氷牙竜の尻尾,1,竜玉,1,白兎獣の毛,6,682',
'ベリオＵメイル,0,1,6,0,5,9,54,109,3,0,-5,-1,0,攻撃,3,耐暑,2,回避性能,-2,回避距離,3,,,風牙竜の堅殻,3,風牙竜の尻尾,1,尖竜骨,5,マレコガネ,2,687',
'ベリオＵレジスト,0,2,6,0,5,9,27,61,4,1,-4,0,1,攻撃,3,耐暑,2,回避性能,-2,回避距離,3,,,風牙竜の堅殻,3,風牙竜の尻尾,1,尖竜骨,5,マレコガネ,2,692',
'ハプルＳメイル,0,1,5,1,4,8,51,106,3,0,-5,-2,1,耐泥耐雪,2,納刀,1,雷属性攻撃,-2,食事,3,,,潜口竜の上皮,4,潜口竜の堅殻,4,極彩色の体液,4,フロギィの皮,5,697',
'ハプルＳレジスト,0,2,5,1,4,8,26,60,4,1,-4,-1,2,耐泥耐雪,2,納刀,1,雷属性攻撃,-2,食事,3,,,潜口竜の上皮,4,潜口竜の堅殻,4,極彩色の体液,4,フロギィの皮,5,702',
'ナルガメイル,0,1,5,0,5,9,51,106,-2,1,1,-5,1,スタミナ,-2,回避性能,3,回避距離,2,気配,2,,,迅竜の上鱗,4,迅竜の鋭牙,5,迅竜の延髄,1,王族カナブン,6,707',
'ナルガレジスト,0,2,5,0,5,9,26,60,-1,2,2,-4,2,スタミナ,-2,回避性能,3,回避距離,2,気配,2,,,迅竜の上鱗,4,迅竜の鋭牙,5,迅竜の延髄,1,王族カナブン,6,712',
'ラギアＳメイル,0,1,5,0,4,8,53,108,-5,1,-1,3,-1,溜め短縮,3,痛撃,1,特殊攻撃,-2,研ぎ師,3,,,海竜の上皮,4,海竜の蒼玉,1,海竜の逆鱗,1,氷牙竜の上毛皮,2,717',
'ラギアＳレジスト,0,2,5,0,4,8,27,61,-4,2,0,4,0,痛撃,1,特殊攻撃,-2,反動,3,通常弾強化,3,,,海竜の上皮,4,海竜の蒼玉,1,海竜の逆鱗,1,氷牙竜の上毛皮,2,722',
'ラギアＵメイル,0,1,6,2,5,10,60,111,-4,2,0,3,-4,攻撃,2,重撃,1,スタミナ,-2,属性耐性,2,,,白海竜の上皮,5,海竜の蒼玉,1,海竜の逆鱗,1,風牙竜の尻尾,1,727',
'ラギアＵレジスト,0,2,6,2,5,10,30,62,-3,3,1,4,-3,攻撃,1,重撃,1,スタミナ,-2,属性耐性,2,,,白海竜の上皮,5,海竜の蒼玉,1,海竜の逆鱗,1,風牙竜の尻尾,1,732',
'レウスＳメイル,0,1,5,1,4,8,53,108,3,0,0,-2,-4,攻撃,2,火属性攻撃,2,研ぎ師,1,回復量,-2,,,火竜の上鱗,5,火竜の甲殻,4,火竜の翼膜,4,ユニオン鉱石,2,737',
'レウスＳレジスト,0,2,5,1,4,8,27,61,4,1,1,-1,-3,攻撃,2,火属性攻撃,1,貫通弾強化,2,回復量,-2,,,火竜の上鱗,5,火竜の甲殻,4,火竜の翼膜,4,ユニオン鉱石,2,742',
'リオソウルメイル,0,1,6,1,5,9,55,110,3,0,-2,0,-4,体力,-2,達人,3,聴覚保護,2,斬れ味,1,,,蒼火竜の堅殻,3,蒼火竜の上鱗,3,爆炎袋,3,堅竜骨,2,747',
'リオソウルレジスト,0,2,6,1,5,9,28,62,4,1,-1,1,-3,体力,-2,達人,3,聴覚保護,2,通常弾強化,1,,,蒼火竜の堅殻,3,蒼火竜の上鱗,3,爆炎袋,3,堅竜骨,2,752',
'ジンオウメイル,0,1,5,0,4,9,53,108,0,-2,-4,3,1,気配,-2,雷属性攻撃,1,斬れ味,3,本気,3,,,雷狼竜の高電毛,4,雷狼竜の堅殻,5,雷狼竜の碧玉,1,雷光虫,20,757',
'ジンオウレジスト,0,2,5,0,4,9,27,61,1,-1,-3,4,2,気配,-2,雷属性攻撃,1,装填速度,4,本気,3,,,雷狼竜の高電毛,4,雷狼竜の堅殻,5,雷狼竜の碧玉,1,雷光虫,20,762',
'ブラキメイル,0,1,5,1,5,8,53,108,3,-4,-2,0,0,回避性能,-2,爆弾強化,2,底力,1,闘魂,3,,,砕竜の堅殻,4,砕竜の黒曜甲,3,ユニオン鉱石,4,赤熱した堅胸殻,3,767',
'ブラキレジスト,0,2,5,1,5,8,27,61,4,-3,-1,1,1,回避性能,-2,爆弾強化,2,底力,1,闘魂,3,,,砕竜の堅殻,4,砕竜の黒曜甲,3,ユニオン鉱石,4,赤熱した堅胸殻,3,772',
'ドボルＳメイル,0,1,5,1,4,8,54,107,-5,3,-2,1,1,攻撃,2,回復速度,4,達人,-2,逆境,1,,,尾槌竜の尖角,2,尾槌竜のコブ,4,竜玉,1,ファンゴの毛皮,6,777',
'ドボルＳレジスト,0,2,5,1,4,8,27,60,-4,4,-1,2,2,攻撃,2,回復速度,4,達人,-2,逆境,1,,,尾槌竜の尖角,2,尾槌竜のコブ,4,竜玉,1,ファンゴの毛皮,6,782',
'城塞遊撃隊【胴巻】,0,1,5,0,4,99,55,110,0,0,0,0,0,達人,2,回復量,2,運気,-2,剥ぎ取り,2,,,闘技王のコイン,2,飛竜のコイン,3,電撃袋,4,勇気の証,3,787',
'城塞弓撃隊【胴巻】,0,2,5,0,4,99,28,62,1,1,1,1,1,達人,2,回復量,2,運気,-2,剥ぎ取り,2,,,闘技王のコイン,2,飛竜のコイン,3,電撃袋,4,勇気の証,3,792',
'ドーベルメイル,0,1,6,1,5,9,55,110,-2,0,0,0,3,耐震,3,気力回復,1,龍属性攻撃,1,腹減り,-2,,,いにしえの龍骨,3,黒角竜の堅甲,4,堅竜骨,3,竜骨【小】,20,797',
'ドーベルレジスト,0,2,6,1,5,9,28,62,-1,1,1,1,4,気力回復,1,龍属性攻撃,1,装填速度,3,腹減り,-2,,,いにしえの龍骨,3,黒角竜の堅甲,4,堅竜骨,3,竜骨【小】,20,802',
'ディアブロＳメイル,0,1,5,1,4,8,56,109,3,0,-5,0,0,溜め短縮,2,達人,2,耐震,2,研ぎ師,-2,,,角竜の堅甲,5,上質なねじれた角,3,角竜の背甲,3,草食竜の甲殻,7,807',
'ディアブロＳレジスト,0,2,5,0,4,8,28,61,4,1,-4,1,1,達人,3,耐震,3,精密射撃,-2,貫通弾強化,2,,,角竜の堅甲,5,上質なねじれた角,3,角竜の背甲,3,草食竜の甲殻,7,812',
'ディアブロＵメイル,0,1,6,2,5,9,57,112,3,0,-5,0,0,KO,1,減気攻撃,1,聴覚保護,2,龍属性攻撃,-2,,,上質な黒巻き角,2,黒角竜の堅甲,5,角竜の骨髄,2,狗竜の尖爪,4,817',
'ディアブロＵレジスト,0,2,6,2,5,9,29,63,4,1,-4,1,1,聴覚保護,2,龍属性攻撃,-2,装填速度,2,反動,1,,,上質な黒巻き角,2,黒角竜の堅甲,5,角竜の骨髄,2,狗竜の尖爪,4,822',
'アグナＳメイル,0,1,5,2,5,8,56,111,3,-5,-1,0,0,体術,1,火属性攻撃,2,斬れ味,1,燃鱗,3,,,炎戈竜の上皮,4,炎戈竜の上ヒレ,2,炎戈竜の堅殻,5,獄炎石,2,827',
'アグナＳレジスト,0,2,5,2,5,8,28,62,4,-4,0,1,1,火属性攻撃,2,精密射撃,1,通常弾強化,1,燃鱗,3,,,炎戈竜の上皮,4,炎戈竜の上ヒレ,2,炎戈竜の堅殻,5,獄炎石,2,832',
'アグナＵメイル,0,1,6,1,5,9,58,111,-5,2,3,-1,-1,体術,-2,ガード性能,3,ガード強化,2,研ぎ師,1,,,凍戈竜の上皮,4,凍戈竜の上ヒレ,3,凍戈竜の堅殻,5,眠狗竜の皮,4,837',
'アグナＵレジスト,0,2,6,1,5,9,29,62,-4,3,4,0,0,達人,2,体術,-2,装填速度,2,貫通弾強化,2,,,凍戈竜の上皮,4,凍戈竜の上ヒレ,3,凍戈竜の堅殻,5,眠狗竜の皮,4,842',
'ガンキンＳメイル,0,1,5,1,4,8,57,110,3,-5,-1,1,-2,防御,4,減気攻撃,1,爆弾強化,2,泳ぎ,-2,,,爆鎚竜の堅殻,5,爆鎚竜の顎,3,爆鎚竜の鱗,6,獄炎石,1,847',
'ガンキンＳレジスト,0,2,5,1,4,8,29,62,4,-4,0,2,-1,防御,4,通常弾強化,1,爆弾強化,2,泳ぎ,-2,,,爆鎚竜の堅殻,5,爆鎚竜の顎,3,爆鎚竜の鱗,6,獄炎石,1,852',
'ガンキンＵメイル,0,1,6,1,5,9,59,112,3,-5,-1,1,-2,気力回復,1,ガード性能,3,砲術,1,泳ぎ,-2,,,鋼鎚竜の剛顎,3,鋼鎚竜の耐熱殻,2,鋼鎚竜の上鱗,5,ユニオン鉱石,3,857',
'ガンキンＵレジスト,0,2,6,1,5,9,30,63,4,-4,0,2,-1,KO,2,反動,2,砲術,1,泳ぎ,-2,,,鋼鎚竜の剛顎,3,鋼鎚竜の耐熱殻,2,鋼鎚竜の上鱗,5,ユニオン鉱石,3,862',
'ダマスクメイル,0,1,6,2,5,10,57,112,-2,2,2,-3,-1,加護,1,雷属性攻撃,2,研ぎ師,1,食事,-2,,,猛々しい龍鋭牙,4,蒼火竜の堅殻,6,恐暴竜の唾液,2,勇気の証,2,867',
'ダマスクレジスト,0,2,6,2,5,10,29,63,-1,3,3,-2,0,加護,1,雷属性攻撃,2,装填速度,1,食事,-2,,,猛々しい龍鋭牙,4,蒼火竜の堅殻,6,恐暴竜の唾液,2,勇気の証,2,872',
'大和【胴当て】,1,1,7,1,5,7,60,107,3,1,-4,0,-4,防御,2,溜め短縮,1,達人,4,底力,-2,,,峯山龍の堅岩殻,6,猛々しい龍鋭牙,4,古龍の血,1,上質なヒレ,6,877',
'陸奥【胴当て】,1,2,7,1,5,7,30,60,4,2,-3,1,-3,防御,4,装填速度,-2,反動,1,貫通弾強化,2,,,峯山龍の堅岩殻,6,猛々しい龍鋭牙,4,古龍の血,1,上質なヒレ,6,882',
'日向【胸当て】,2,1,7,1,5,7,60,107,3,1,-4,0,-4,防御,2,溜め短縮,1,達人,4,底力,-2,,,峯山龍の堅岩殻,6,猛々しい龍鋭牙,4,古龍の血,1,上質なヒレ,6,887',
'天城【胸当て】,2,2,7,1,5,7,30,60,4,2,-3,1,-3,防御,2,装填速度,-2,反動,1,貫通弾強化,2,,,峯山龍の堅岩殻,6,猛々しい龍鋭牙,4,古龍の血,1,上質なヒレ,6,892',
'バンギスメイル,0,1,7,0,5,10,62,113,0,0,1,-4,-4,攻撃,4,斬れ味,1,腹減り,-2,食事,4,,,恐暴竜の大牙,5,恐暴竜の鉤爪,4,恐暴竜の黒皮,5,雷狼竜の碧玉,1,897',
'バンギスレジスト,0,2,7,0,5,10,31,62,1,1,2,-3,-3,攻撃,3,反動,2,腹減り,-2,食事,4,,,恐暴竜の大牙,5,恐暴竜の鉤爪,4,恐暴竜の黒皮,5,雷狼竜の碧玉,1,902',
'エスカドラソウル,0,1,7,0,5,10,68,113,-3,-2,3,3,-2,気絶,-2,回避距離,1,属性攻撃,3,本気,2,属性耐性,2,煌黒龍の堅逆殻,6,煌黒龍の尖爪,6,砕けた天角,4,潜口竜の頭殻,3,907',
'エスカドラゼーレ,0,2,7,0,5,10,34,63,-2,-1,4,4,-1,気絶,-2,回避距離,1,属性攻撃,2,本気,3,属性耐性,1,煌黒龍の堅逆殻,6,煌黒龍の尖爪,6,砕けた天角,4,潜口竜の頭殻,3,912',
'大海賊Ｊスーツ,0,1,7,0,5,99,40,103,-2,-2,-2,-2,-2,加護,-2,運気,2,剥ぎ取り,3,捕獲,2,,,海賊Ｊチケット,1,赤甲獣の尖爪,2,不気味な上皮,2,赤熱した堅胸殻,3,917',
'大海賊Ｊジャケット,0,2,7,0,5,99,20,58,-1,-1,-1,-1,-1,加護,-2,運気,1,剥ぎ取り,3,捕獲,2,,,海賊Ｊチケット,1,赤甲獣の尖爪,2,不気味な上皮,2,赤熱した堅胸殻,3,922',
'モンハン部ジャケット,0,1,7,0,3,99,51,106,3,3,3,3,3,狩人,10,,,,,,,,,モンハン部入部届,2,高級なトサカ,3,海竜の高電殻,5,灯魚竜の上棘,5,926,jEvent',
'モンハン部ジャージ,0,2,7,0,3,99,26,60,4,4,4,4,4,狩人,10,,,,,,,,,モンハン部入部届,2,高級なトサカ,3,海竜の高電殻,5,灯魚竜の上棘,5,927,jEvent',
'狩猟戦線ジャケット,0,1,7,0,3,99,51,106,2,2,2,2,2,逆境,10,,,,,,,,,モンハン部入部届,2,水獣の鋭爪,5,海竜の上皮,5,高級提灯球,3,930',
'狩猟戦線ライダース,0,2,7,0,3,99,26,60,3,3,3,3,3,逆境,10,,,,,,,,,モンハン部入部届,2,水獣の鋭爪,5,海竜の上皮,5,高級提灯球,3,931',
'武装戦線ジャケット,0,1,5,0,3,99,53,108,2,2,2,2,2,逆境,10,,,,,,,,,武装への招待状,2,土砂竜の鋭爪,5,上質な毛皮,6,勇気の証,1,928',
'武装戦線ライダース,0,2,5,0,3,99,27,61,3,3,3,3,3,逆境,10,,,,,,,,,武装への招待状,2,土砂竜の鋭爪,5,上質な毛皮,6,勇気の証,1,929',
'坊屋ジャケット,0,1,7,0,7,99,53,108,0,0,0,0,0,攻撃,5,気力回復,3,気配,-3,,,,,武装への招待状,1,土砂竜の堅殻,4,白海竜の厚皮,4,迅竜の上黒毛,4,934',
'坊屋ジャンパー,0,2,7,0,7,99,27,61,1,1,1,1,1,攻撃,5,気力回復,3,気配,-3,,,,,武装への招待状,1,土砂竜の堅殻,4,白海竜の厚皮,4,迅竜の上黒毛,4,937',
'ブナハＸスーツ,0,1,8,1,6,99,68,112,-6,-1,-1,2,4,麻痺,2,攻撃,-2,納刀,1,特殊攻撃,2,剣術,2,飛甲虫の斬羽,2,飛甲虫の堅殻,3,モンスターの特濃,2,皇帝バッタ,2,943',
'ブナハＸベスト,0,2,8,1,6,99,40,63,-5,0,0,3,5,麻痺,2,攻撃,-1,納刀,2,特殊攻撃,2,装填数,2,飛甲虫の斬羽,2,飛甲虫の堅殻,3,モンスターの特濃,2,皇帝バッタ,2,948',
'リノプロＸメイル,0,1,8,1,6,99,68,112,3,-2,-2,-2,2,溜め短縮,2,KO,2,砲術,1,水流,1,属性解放,2,草食竜の重骨,2,竜骨【大】,3,エルトライト鉱石,2,,,953',
'リノプロＸレジスト,0,2,8,1,6,99,40,63,4,-1,-1,-1,3,溜め短縮,1,KO,2,砲術,1,水流,2,属性解放,2,草食竜の重骨,2,竜骨【大】,3,エルトライト鉱石,2,,,958',
'ズワロＸマント,0,1,8,1,6,99,68,112,-4,4,-2,0,2,調合成功率,8,,,,,,,,,柔軟な厚皮,2,垂皮竜の上皮,5,極上の毛皮,2,,,963',
'ズワロＸケープ,0,2,8,1,6,99,40,63,-3,5,-1,1,3,調合成功率,7,,,,,,,,,柔軟な厚皮,2,垂皮竜の上皮,5,極上の毛皮,2,,,965',
'三眼の首飾り,0,0,9,3,6,99,40,65,3,-3,0,0,1,,,,,,,,,,,エルトライト鉱石,3,ピュアクリスタル,2,,,,,967',
'マギュルＸトロンコ,0,1,9,2,6,99,72,114,-5,1,4,0,0,回復速度,1,溜め短縮,1,重撃,1,調合成功率,2,調合数,2,尾槌竜の重苔甲,1,ペピポパンプキン,4,落陽草の花,1,サボテンの花,20,972',
'マギュルＸシュタム,0,2,9,2,6,99,42,64,-4,2,5,1,1,回復速度,2,溜め短縮,1,重撃,1,調合成功率,1,調合数,2,尾槌竜の重苔甲,1,ペピポパンプキン,4,落陽草の花,1,サボテンの花,20,977',
'ジャギィＸメイル,0,1,8,1,6,99,72,114,-5,0,0,0,3,気絶,1,攻撃,2,回復速度,3,肉食,2,属性解放,1,狗竜の厚皮,4,狗竜の上皮,4,堅牢な鳥竜骨,3,ユニオン鉱石,2,982',
'ジャギィＸレジスト,0,2,8,1,6,99,42,64,-4,1,1,1,4,気絶,2,攻撃,2,回復速度,3,肉食,1,属性解放,1,狗竜の厚皮,4,狗竜の上皮,4,堅牢な鳥竜骨,3,ユニオン鉱石,2,987',
'バギィＸメイル,0,1,8,1,6,99,72,114,-5,0,3,0,2,回復速度,2,耐寒,2,回避性能,1,氷属性攻撃,2,号令,2,眠狗竜の厚皮,4,眠狗竜の上皮,4,堅牢な鳥竜骨,3,皇帝バッタ,2,992',
'バギィＸレジスト,0,2,8,1,6,99,42,64,-4,1,4,1,3,回復速度,1,耐寒,2,回避性能,1,氷属性攻撃,2,号令,3,眠狗竜の厚皮,4,眠狗竜の上皮,4,堅牢な鳥竜骨,3,皇帝バッタ,2,997',
'フロギィＸメイル,0,1,8,2,6,99,72,114,3,-3,-5,0,3,対防御DOWN,2,斬れ味,1,匠,1,食事,2,采配,1,毒狗竜の厚皮,4,毒狗竜の上皮,4,堅牢な鳥竜骨,3,メランジェ鉱石,2,1002',
'フロギィＸレジスト,0,2,8,2,6,99,42,64,4,-2,-4,1,4,対防御DOWN,2,装填数,1,通常弾強化,1,食事,2,采配,1,毒狗竜の厚皮,4,毒狗竜の上皮,4,堅牢な鳥竜骨,3,メランジェ鉱石,2,1007',
'アシラＸメイル,0,1,8,2,6,99,72,114,-5,3,-3,0,3,食いしん坊,1,高速収集,1,気まぐれ,3,ハチミツ,2,,,青熊獣の重腕甲,2,青熊獣の重殻,2,飛甲虫の斬羽,3,皇帝バッタ,4,1012',
'アシラＸレジスト,0,2,8,2,6,99,42,64,-4,4,-2,1,4,食いしん坊,2,高速収集,1,気まぐれ,3,ハチミツ,1,,,青熊獣の重腕甲,2,青熊獣の重殻,2,飛甲虫の斬羽,3,皇帝バッタ,4,1017',
'ウルクＸメイル,0,1,8,1,6,99,72,114,-5,0,3,-1,0,耐泥耐雪,1,納刀,1,気力回復,2,飛距離,2,無傷,1,白兎獣の豪剛毛,3,白兎獣の堅腹甲,3,偉大なトサカ,4,皇帝バッタ,3,1022',
'ウルクＸレジスト,0,2,8,1,6,99,42,64,-4,1,4,0,1,耐泥耐雪,1,納刀,1,気力回復,2,飛距離,1,無傷,2,白兎獣の豪剛毛,3,白兎獣の堅腹甲,3,偉大なトサカ,4,皇帝バッタ,3,1027',
'ラングロＸメイル,0,1,8,1,6,99,72,114,3,-5,-1,0,2,細菌学,1,耐震,2,回避性能,2,水耐性,-1,属性解放,2,赤甲獣の重殻,3,毒狗竜の厚皮,3,重厚な骨,2,獄炎石,3,1032',
'ラングロＸレジスト,0,2,8,1,6,99,42,64,4,-4,0,1,3,細菌学,1,耐震,2,回避性能,2,水耐性,-2,属性解放,2,赤甲獣の重殻,3,毒狗竜の厚皮,3,重厚な骨,2,獄炎石,3,1037',
'インゴットＸメイル,0,1,8,1,7,99,76,112,-3,-3,0,3,2,納刀,1,ガード強化,2,雷属性攻撃,3,抜刀会心,1,気まぐれ,-2,真紅蓮石,3,獄炎石,3,エルトライト鉱石,2,カブレライト鉱石,5,1042',
'インゴットＸレジスト,0,2,8,1,7,99,44,62,-2,-2,1,4,3,痛撃,1,雷属性攻撃,3,反動,1,散弾強化,2,気まぐれ,-2,真紅蓮石,3,獄炎石,3,エルトライト鉱石,2,カブレライト鉱石,5,1047',
'撫子・華【花衣】,2,1,9,1,6,99,76,110,0,0,0,0,0,毒,-2,回避性能,1,広域,4,観察眼,1,千里眼,1,メランジェ鉱石,2,落陽草の花,1,イチノタチウオ,3,大きな太古の破片,4,1052',
'桔梗・華【花衣】,2,2,9,1,6,99,44,61,1,1,1,1,1,毒,-2,回避性能,1,広域,4,観察眼,1,千里眼,1,メランジェ鉱石,2,落陽草の花,1,イチノタチウオ,3,大きな太古の破片,4,1057',
'セイラースーツ,2,1,9,1,7,99,76,110,0,2,-2,0,0,気配,-1,広域,4,運気,2,酸素,2,,,狩猟王のコイン,3,飛竜のコイン,5,マボロシチョウ,5,覇王の証,3,1062',
'セイラーベスト,2,2,9,1,7,99,44,61,1,3,-1,1,1,気配,-1,広域,4,運気,2,酸素,2,,,狩猟王のコイン,3,飛竜のコイン,5,マボロシチョウ,5,覇王の証,3,1067',
'ペッコＸメイル,0,1,8,1,6,99,76,115,4,-1,-5,0,0,氷耐性,-2,笛,1,広域,3,観察眼,2,属性解放,1,彩鳥の厚鱗,3,極彩色の艶羽根,2,堅牢な鳥竜骨,3,マボロシチョウ,1,1072',
'ペッコＸレジスト,0,2,8,1,6,99,44,64,5,0,-4,1,1,氷耐性,-2,装填数,2,散弾強化,1,広域,3,観察眼,1,彩鳥の厚鱗,3,極彩色の艶羽根,2,堅牢な鳥竜骨,3,マボロシチョウ,1,1077',
'ペッコＺメイル,0,1,9,1,6,99,76,115,-1,0,-5,4,0,睡眠,-2,対防御DOWN,3,達人,1,風圧,2,広域,1,紅彩鳥の厚鱗,3,極彩色の艶羽根,2,重厚な骨,1,マボロシチョウ,1,1082',
'ペッコＺレジスト,0,2,9,0,6,99,44,64,0,1,-4,5,1,睡眠,-2,対防御DOWN,3,達人,2,風圧,3,広域,1,紅彩鳥の厚鱗,3,極彩色の艶羽根,2,重厚な骨,1,マボロシチョウ,1,1087',
'ルドロスＸメイル,0,1,8,1,6,99,78,115,-5,4,-1,-1,1,聴覚保護,1,スタミナ,2,水属性攻撃,2,雷属性攻撃,-1,運気,2,海綿質の厚皮,3,柔軟な厚皮,4,水生獣の上皮,6,マボロシチョウ,1,1092',
'ルドロスＸレジスト,0,2,8,0,6,99,45,64,-4,5,0,0,2,聴覚保護,2,スタミナ,1,水属性攻撃,3,雷属性攻撃,-2,運気,2,海綿質の厚皮,3,柔軟な厚皮,4,水生獣の上皮,6,マボロシチョウ,1,1097',
'ルドロスＺメイル,0,1,9,1,6,99,78,115,-5,4,0,-2,1,毒,3,スタミナ,1,特殊攻撃,1,腹減り,3,,,海綿質の紫厚皮,3,柔軟な厚皮,4,水生獣の上皮,6,水獣の靭尾,1,1102',
'ルドロスＺレジスト,0,2,9,1,6,99,45,64,-4,5,1,-1,2,毒,3,スタミナ,1,特殊攻撃,2,腹減り,3,,,海綿質の紫厚皮,3,柔軟な厚皮,4,水生獣の上皮,6,水獣の靭尾,1,1107',
'アーティアＸメイル,0,1,9,2,6,99,80,114,0,-3,2,-3,4,ガード強化,4,抜刀会心,2,属性解放,1,,,,,エルトライト鉱石,5,さびた破片,5,大きな太古の破片,3,ピュアクリスタル,4,1111',
'アーティアＸレジスト,0,2,9,2,6,99,46,63,1,-2,3,-2,5,装填数,1,速射,3,反動,3,,,,,エルトライト鉱石,5,さびた破片,5,大きな太古の破片,3,ピュアクリスタル,4,1114',
'ガノスＸメイル,0,1,8,1,6,99,80,115,-5,4,2,-6,2,体術,-1,聴覚保護,1,剣術,3,捕獲,3,高速設置,1,水竜の特上ビレ,3,水竜の厚鱗,2,水竜の剛翼膜,2,柔軟な厚皮,2,1118',
'ガノスＸレジスト,0,2,8,1,6,99,46,64,-4,5,3,-5,3,体術,-1,速射,3,捕獲,3,高速設置,1,属性解放,1,水竜の特上ビレ,3,水竜の厚鱗,2,水竜の剛翼膜,2,柔軟な厚皮,2,1122',
'ガノスＺメイル,0,1,9,1,6,99,82,115,-5,4,2,-6,2,痛撃,2,体術,-2,スタミナ,3,水の心,2,,,翠水竜の特上ビレ,3,翠水竜の厚鱗,2,水竜の剛翼膜,2,皇帝バッタ,10,1126',
'ガノスＺレジスト,0,2,9,1,6,99,47,64,-4,5,3,-5,3,痛撃,2,体術,-2,スタミナ,2,水の心,2,,,翠水竜の特上ビレ,3,翠水竜の厚鱗,2,水竜の剛翼膜,2,皇帝バッタ,10,1130',
'レイアＸメイル,0,1,8,2,6,99,80,115,4,0,0,-2,-5,体力,1,火属性攻撃,1,水属性攻撃,-2,回復量,2,属性解放,1,雌火竜の厚鱗,4,雌火竜の紅玉,1,火竜の延髄,1,獄炎石,2,1134',
'レイアＸレジスト,0,2,8,1,6,99,46,64,5,1,1,-1,-4,体力,3,火属性攻撃,1,水属性攻撃,-2,回復量,2,属性解放,1,雌火竜の厚鱗,4,雌火竜の紅玉,1,火竜の延髄,1,獄炎石,2,1139',
'リオハートＺメイル,0,1,9,1,6,99,80,115,4,0,0,-2,-5,風圧,3,気配,-1,火属性攻撃,1,効果持続,2,底力,2,桜火竜の厚鱗,3,桜火竜の重殻,2,エルトライト鉱石,4,雌火竜の天鱗,1,1144',
'リオハートＺレジスト,0,2,9,1,6,99,46,64,5,1,1,-1,-4,風圧,3,気配,-1,火属性攻撃,2,効果持続,2,底力,1,桜火竜の厚鱗,3,桜火竜の重殻,2,エルトライト鉱石,4,雌火竜の天鱗,1,1149',
'ギルドバードＸスーツ,1,1,9,0,7,99,80,114,0,0,0,0,0,体力,3,気配,-2,護石王,1,運気,3,千里眼,1,狩猟王のコイン,2,飛竜のコイン,3,電怪竜の剛爪,3,覇王の証,1,1154',
'ギルドバードＸベスト,1,2,9,0,7,99,46,63,1,1,1,1,1,体力,3,気配,-2,護石王,1,運気,3,千里眼,1,狩猟王のコイン,2,飛竜のコイン,3,電怪竜の剛爪,3,覇王の証,1,1159',
'スカラーＸスーツ,2,1,9,0,7,99,80,114,0,0,0,0,0,体力,3,気配,-2,護石王,1,運気,3,千里眼,1,狩猟王のコイン,2,飛竜のコイン,3,電怪竜の剛爪,3,覇王の証,1,1164',
'スカラーＸベスト,2,2,9,0,7,99,46,63,1,1,1,1,1,体力,3,気配,-2,護石王,1,運気,3,千里眼,1,狩猟王のコイン,2,飛竜のコイン,3,電怪竜の剛爪,3,覇王の証,1,1169',
'城塞特攻隊【胴巻】,0,1,9,0,7,99,80,114,0,0,0,0,0,気配,-2,匠,1,回復量,3,剥ぎ取り,3,根性,2,狩猟王のコイン,3,海竜のコイン,3,翠水竜の特上ビレ,3,覇王の証,1,1174',
'城塞隠密隊【胴巻】,0,2,9,0,7,99,46,63,1,1,1,1,1,気配,3,装填数,1,回復量,2,剥ぎ取り,3,根性,2,狩猟王のコイン,3,海竜のコイン,3,翠水竜の特上ビレ,3,覇王の証,1,1179',
'ベリオＸメイル,0,1,8,1,6,99,81,114,-6,0,4,-2,0,体術,1,気力回復,-2,回避性能,2,氷属性攻撃,3,抜刀会心,1,氷牙竜の重殻,4,氷牙竜の靭尾,1,大竜玉,1,白兎獣の豪剛毛,6,1184',
'ベリオＸレジスト,0,2,8,1,6,99,47,64,-5,1,5,-1,1,痛撃,1,体術,3,気力回復,-2,回避性能,1,氷属性攻撃,2,氷牙竜の重殻,4,氷牙竜の靭尾,1,大竜玉,1,白兎獣の豪剛毛,6,1189',
'ベリオＺメイル,0,1,9,2,7,99,86,114,4,0,-6,-2,0,攻撃,2,耐暑,2,気力回復,1,回避性能,-1,回避距離,1,風牙竜の重殻,3,風牙竜の靭尾,1,重竜骨,3,皇帝バッタ,2,1194',
'ベリオＺレジスト,0,2,9,2,7,99,49,63,5,1,-5,-1,1,攻撃,2,耐暑,2,気力回復,1,回避性能,-1,回避距離,1,風牙竜の重殻,3,風牙竜の靭尾,1,重竜骨,3,皇帝バッタ,2,1199',
'ボロスＸメイル,0,1,8,2,6,99,82,115,-4,4,-3,2,0,攻撃,1,体術,1,スタミナ,2,ガード性能,1,腹減り,-2,土砂竜の重甲,4,土砂竜の重頭殻,3,土砂竜の剛爪,2,極上の毛皮,3,1204',
'ボロスＸレジスト,0,2,8,2,6,99,47,64,-3,5,-2,3,1,攻撃,1,体術,1,スタミナ,2,精密射撃,1,腹減り,-2,土砂竜の重甲,4,土砂竜の重頭殻,3,土砂竜の剛爪,2,極上の毛皮,3,1209',
'ボロスＺメイル,0,1,9,1,6,99,82,115,-4,2,3,-2,0,防御,2,聴覚保護,1,火属性攻撃,-2,氷属性攻撃,2,底力,2,氷砕竜の重頭殻,3,氷砕竜の重甲,4,氷砕竜の剛爪,2,白兎獣の地獄耳,2,1214',
'ボロスＺレジスト,0,2,9,1,6,99,47,64,-5,2,5,-1,1,防御,2,聴覚保護,2,火属性攻撃,-2,氷属性攻撃,2,底力,1,氷砕竜の重頭殻,3,氷砕竜の重甲,4,氷砕竜の剛爪,2,白兎獣の地獄耳,2,1219',
'ガブルＸメイル,0,1,8,1,6,99,82,115,-5,2,5,-1,1,回復速度,-2,達人,2,回避距離,1,食事,2,泳ぎ,2,灯魚竜の特上ビレ,2,灯魚竜の秘棘,3,灯魚竜の厚皮,4,幻鳥竜玉,2,1224',
'ガブルＸレジスト,0,2,8,1,6,99,47,64,-4,3,6,0,2,回復速度,-2,達人,2,回避距離,2,食事,1,泳ぎ,2,灯魚竜の特上ビレ,2,灯魚竜の秘棘,3,灯魚竜の厚皮,4,幻鳥竜玉,2,1229',
'ネブラＸメイル,0,1,8,1,6,99,83,116,-6,0,2,2,-1,回避性能,1,特殊攻撃,2,属性攻撃,-2,斬れ味,2,属性解放,2,毒怪竜の剛爪,2,毒怪竜の厚皮,4,おぞましい毒腺,3,ピュアクリスタル,1,1234',
'ネブラＸレジスト,0,2,8,1,6,99,48,65,-5,1,3,3,0,回避性能,1,特殊攻撃,2,属性攻撃,-2,装填数,2,属性解放,2,毒怪竜の剛爪,2,毒怪竜の厚皮,4,おぞましい毒腺,3,ピュアクリスタル,1,1239',
'ネブラＺメイル,0,1,9,2,6,99,83,116,0,-6,2,4,-1,溜め短縮,1,減気攻撃,1,雷属性攻撃,3,氷属性攻撃,-2,,,電怪竜の剛爪,2,電怪竜の厚皮,4,大竜玉,1,堅牢な鳥竜骨,5,1244',
'ネブラＺレジスト,0,2,9,2,6,99,48,65,1,-5,3,5,0,溜め短縮,1,減気攻撃,1,雷属性攻撃,3,氷属性攻撃,-2,,,電怪竜の剛爪,2,電怪竜の厚皮,4,大竜玉,1,堅牢な鳥竜骨,5,1249',
'ハプルＸメイル,0,1,8,1,6,99,83,116,3,0,-6,-2,1,納刀,1,達人,2,雷属性攻撃,-2,抜刀減気,1,食事,3,潜口竜の厚皮,4,潜口竜の重殻,4,光り輝く体液,4,堅牢な鳥竜骨,2,1254',
'ハプルＸレジスト,0,2,8,1,6,99,48,65,4,1,-5,-1,2,納刀,1,雷属性攻撃,-2,装填速度,1,装填数,2,貫通弾強化,3,潜口竜の厚皮,4,潜口竜の重殻,4,光り輝く体液,4,堅牢な鳥竜骨,2,1259',
'ドボルＸメイル,0,1,8,2,6,99,84,117,-6,3,-2,1,1,達人,-2,重撃,2,減気攻撃,1,抜刀減気,1,逆境,1,尾槌竜の剛角,2,霜降りのコブ,4,大竜玉,1,極上の毛皮,3,1264',
'ドボルＸレジスト,0,2,8,2,6,99,48,65,-5,4,-1,2,2,溜め短縮,1,達人,-2,重撃,2,減気攻撃,1,逆境,1,尾槌竜の剛角,2,霜降りのコブ,4,大竜玉,1,極上の毛皮,3,1269',
'ドボルＺメイル,0,1,9,1,6,99,86,117,3,-4,-4,1,1,攻撃,1,回避性能,-2,属性解放,2,根性,3,,,尾槌竜の剛角,2,霜降りのコブ,4,大竜玉,1,極上の腹袋,3,1274',
'ドボルＺレジスト,0,2,9,1,6,99,49,65,4,-3,-3,2,2,攻撃,1,回避性能,-2,装填数,2,根性,3,,,尾槌竜の剛角,2,霜降りのコブ,4,大竜玉,1,極上の腹袋,3,1279',
'ナルガＸメイル,0,1,8,1,7,99,85,113,-2,2,1,-6,1,スタミナ,-2,回避性能,3,回避距離,1,気配,1,匠,2,迅竜の厚鱗,3,迅竜の重牙,4,迅竜の豪黒毛,3,狗竜の厚皮,3,1284',
'ナルガＸレジスト,0,2,8,1,7,99,49,64,-1,3,2,-5,2,スタミナ,-2,回避性能,3,回避距離,1,気配,1,装填数,2,迅竜の厚鱗,3,迅竜の重牙,4,迅竜の豪黒毛,3,狗竜の厚皮,3,1289',
'ナルガＺメイル,0,1,9,1,7,99,87,115,-2,2,1,-6,1,溜め短縮,3,体術,-2,気力回復,1,回避性能,3,,,緑迅竜の厚鱗,5,緑迅竜の重牙,5,迅竜の天鱗,1,重厚な牙,3,1294',
'ナルガＺレジスト,0,2,9,1,7,99,50,64,-1,3,2,-5,2,溜め短縮,3,体術,-2,気力回復,1,回避性能,3,,,緑迅竜の厚鱗,5,緑迅竜の重牙,5,迅竜の天鱗,1,重厚な牙,3,1299',
'ヘリオスＸメイル,1,1,8,1,6,99,85,117,0,4,1,-2,-7,加護,-2,重撃,1,聴覚保護,3,剣術,2,属性解放,1,皇海龍の豪鎧毛,5,大海龍の鎧毛,6,大地の龍玉,5,覇王の証,1,1304',
'ヘリオスＸレジスト,1,2,8,1,6,99,49,64,1,5,2,-1,-6,加護,-2,重撃,1,聴覚保護,4,装填数,1,属性解放,1,皇海龍の豪鎧毛,5,大海龍の鎧毛,6,大地の龍玉,5,覇王の証,1,1309',
'セレネＸメイル,2,1,8,1,6,99,85,117,0,4,1,-2,-7,加護,-2,重撃,1,聴覚保護,3,剣術,2,属性解放,1,皇海龍の豪鎧毛,5,大海龍の鎧毛,6,大地の龍玉,5,覇王の証,1,1314',
'セレネＸレジスト,2,2,8,1,6,99,49,65,1,5,2,-1,-6,加護,-2,重撃,1,聴覚保護,4,装填数,1,属性解放,1,皇海龍の豪鎧毛,5,大海龍の鎧毛,6,大地の龍玉,5,覇王の証,1,1319',
'ヘリオスＺメイル,1,1,9,0,6,99,86,118,0,4,1,-2,-7,聴覚保護,4,水属性攻撃,2,斬れ味,-1,匠,1,,,皇海龍の豪鎧毛,4,皇海龍の重甲皮,5,湾曲した剛龍角,2,覇王の証,1,1324',
'ヘリオスＺレジスト,1,2,9,0,6,99,49,65,1,5,2,-1,-6,聴覚保護,4,水属性攻撃,2,装填数,1,反動,-1,,,皇海龍の豪鎧毛,4,皇海龍の重甲皮,5,湾曲した剛龍角,2,覇王の証,1,1329',
'セレネＺメイル,2,1,9,0,6,99,86,118,0,4,1,-2,-7,聴覚保護,4,水属性攻撃,2,斬れ味,-1,匠,1,,,皇海龍の豪鎧毛,4,皇海龍の重甲皮,5,湾曲した剛龍角,2,覇王の証,1,1334',
'セレネＺレジスト,2,2,9,0,6,99,49,65,1,5,2,-1,-6,聴覚保護,4,水属性攻撃,2,装填数,1,反動,-1,,,皇海龍の豪鎧毛,4,皇海龍の重甲皮,5,湾曲した剛龍角,2,覇王の証,1,1339',
'ロワーガＸペット,1,1,9,0,7,99,86,114,-5,0,-1,4,1,加護,-1,聴覚保護,3,龍属性攻撃,2,ハチミツ,3,属性解放,1,ピュアアゲハ,2,マボロシチョウ,1,皇帝バッタ,8,セッチャクロアリ,20,1344',
'ロワーガＸペクトス,1,2,9,0,7,99,49,63,-4,1,0,5,2,加護,-1,聴覚保護,3,龍属性攻撃,2,ハチミツ,3,属性解放,1,ピュアアゲハ,2,マボロシチョウ,1,皇帝バッタ,8,セッチャクロアリ,20,1349',
'ファルメルＸペット,2,1,9,0,7,99,86,114,-5,0,-1,4,1,加護,-2,聴覚保護,3,龍属性攻撃,1,ハチミツ,3,属性解放,1,ピュアアゲハ,2,マボロシチョウ,1,皇帝バッタ,8,セッチャクロアリ,20,1354',
'ファルメルＸペクトス,2,2,9,0,7,99,49,63,-4,1,0,5,2,加護,-2,聴覚保護,3,龍属性攻撃,1,ハチミツ,3,属性解放,1,ピュアアゲハ,2,マボロシチョウ,1,皇帝バッタ,8,セッチャクロアリ,20,1359',
'レウスＸメイル,0,1,8,2,7,99,88,116,4,0,0,-2,-6,攻撃,2,火属性攻撃,1,研ぎ師,1,抜刀会心,1,回復量,-2,火竜の厚鱗,5,火竜の重殻,4,火竜の剛翼,2,メランジェ鉱石,2,1364',
'レウスＸレジスト,0,2,8,2,7,99,50,64,5,1,1,-1,-5,攻撃,1,火属性攻撃,1,装填数,1,速射,1,回復量,-3,火竜の厚鱗,5,火竜の重殻,4,火竜の剛翼,2,メランジェ鉱石,2,1369',
'リオソウルＺメイル,0,1,9,2,7,99,90,116,4,0,-2,0,-6,体力,-2,達人,3,聴覚保護,1,剣術,1,,,蒼火竜の厚鱗,3,蒼火竜の重殻,3,業炎袋,3,重竜骨,3,1374',
'リオソウルＺレジスト,0,2,9,2,7,99,51,64,5,1,-1,1,-5,体力,-2,達人,2,聴覚保護,1,装填数,2,,,蒼火竜の厚鱗,3,蒼火竜の重殻,3,業炎袋,3,重竜骨,3,1379',
'ディアブロＸメイル,0,1,8,1,7,99,89,117,4,0,-6,0,0,納刀,1,耐震,2,匠,2,研ぎ師,-2,抜刀会心,2,角竜の重甲,5,大地を穿つ剛角,1,角竜の堅甲,3,赤甲獣の重殻,4,1384',
'ディアブロＸレジスト,0,2,8,1,7,99,51,65,5,1,-5,1,1,納刀,1,装填速度,3,装填数,2,精密射撃,-2,貫通弾強化,1,角竜の重甲,5,大地を穿つ剛角,1,角竜の堅甲,3,赤甲獣の重殻,4,1389',
'ディアブロＺメイル,0,1,9,2,7,99,89,117,4,0,-6,0,0,痛撃,2,KO,1,減気攻撃,1,龍属性攻撃,-2,,,堅牢な黒巻き角,2,黒角竜の重甲,5,角竜の延髄,2,偉大なエリマキ,2,1394',
'ディアブロＺレジスト,0,2,9,2,7,99,51,65,5,1,-5,1,1,痛撃,2,龍属性攻撃,-2,装填速度,1,反動,1,,,堅牢な黒巻き角,2,黒角竜の重甲,5,角竜の延髄,2,偉大なエリマキ,2,1399',
'アグナＸメイル,0,1,8,0,7,99,90,116,4,-6,-1,0,0,体術,2,火属性攻撃,2,斬れ味,2,匠,2,燃鱗,3,炎戈竜の厚皮,4,炎戈竜の特上ビレ,2,炎戈竜の重殻,5,真紅蓮石,2,1404',
'アグナＸレジスト,0,2,8,0,7,99,51,64,5,-5,0,1,1,火属性攻撃,2,装填数,2,精密射撃,2,通常弾強化,2,燃鱗,3,炎戈竜の厚皮,4,炎戈竜の特上ビレ,2,炎戈竜の重殻,5,真紅蓮石,2,1409',
'アグナＺメイル,0,1,9,2,7,99,90,116,-6,3,4,-2,-2,体術,-1,ガード性能,3,ガード強化,2,剣術,1,,,凍戈竜の厚皮,4,凍戈竜の特上ビレ,3,凍戈竜の重殻,5,凍った粘液塊,4,1414',
'アグナＺレジスト,0,2,9,2,7,99,51,64,-5,4,5,-1,-1,体術,-2,装填速度,2,速射,1,貫通弾強化,2,,,凍戈竜の厚皮,4,凍戈竜の特上ビレ,3,凍戈竜の重殻,5,凍った粘液塊,4,1419',
'ブラキＸメイル,0,1,8,1,7,99,90,118,4,-6,-2,0,0,回避性能,-2,抜刀会心,1,爆弾強化,2,底力,1,闘魂,3,砕竜の重殻,4,砕竜の重黒曜甲,3,砕竜の宝玉,2,重竜骨,2,1424',
'ブラキＸレジスト,0,2,8,1,7,99,51,65,5,-5,-1,1,1,回避性能,-2,速射,1,爆弾強化,2,底力,1,闘魂,3,砕竜の重殻,4,砕竜の重黒曜甲,3,砕竜の宝玉,2,重竜骨,2,1429',
'ラギアＸメイル,0,1,8,1,7,99,90,116,-6,1,-1,4,-1,溜め短縮,2,痛撃,2,特殊攻撃,-2,匠,2,属性解放,1,海竜の厚皮,4,海竜の蒼天鱗,1,海竜の剛尾,1,氷牙竜の厚毛皮,4,1434',
'ラギアＸレジスト,0,2,8,1,7,99,51,65,-5,2,0,5,0,溜め短縮,1,痛撃,1,特殊攻撃,-2,速射,2,属性解放,3,海竜の厚皮,4,海竜の蒼天鱗,1,海竜の剛尾,1,氷牙竜の厚毛皮,4,1439',
'ラギアＺメイル,0,1,9,3,7,99,92,116,-5,2,0,4,-5,攻撃,1,重撃,1,スタミナ,-2,属性耐性,1,,,白海竜の厚皮,4,海竜の剛爪,1,海竜の蒼玉,1,風牙竜の厚毛皮,5,1444',
'ラギアＺレジスト,0,2,9,3,7,99,52,64,-4,3,1,5,-4,攻撃,1,重撃,1,スタミナ,-2,属性耐性,1,,,白海竜の厚皮,4,海竜の剛爪,1,海竜の蒼玉,1,風牙竜の厚毛皮,5,1449',
'ガンキンＸメイル,0,1,8,0,7,99,91,117,4,-6,-1,1,-2,防御,5,溜め短縮,2,抜刀減気,1,爆弾強化,1,泳ぎ,-2,爆鎚竜の重殻,5,爆鎚竜の重顎,1,爆鎚竜の骨髄,6,真紅蓮石,2,1454',
'ガンキンＸレジスト,0,2,8,0,7,99,52,65,5,-5,0,2,-1,防御,5,装填数,2,通常弾強化,1,爆弾強化,1,泳ぎ,-2,爆鎚竜の重殻,5,爆鎚竜の重顎,1,爆鎚竜の骨髄,6,真紅蓮石,2,1459',
'ガンキンＺメイル,0,1,9,1,7,99,91,117,4,-6,-1,1,-2,細菌学,3,ガード性能,2,剣術,2,砲術,1,泳ぎ,-1,鋼鎚竜の重顎,2,鋼鎚竜の重耐熱殻,2,鋼鎚竜の厚鱗,5,メランジェ鉱石,3,1464',
'ガンキンＺレジスト,0,2,9,1,7,99,52,65,5,-5,0,2,-1,細菌学,2,KO,1,反動,3,砲術,2,泳ぎ,-1,鋼鎚竜の重顎,2,鋼鎚竜の重耐熱殻,2,鋼鎚竜の厚鱗,5,メランジェ鉱石,3,1469',
'ジンオウＸメイル,0,1,8,3,7,99,92,116,0,-3,-6,4,1,気配,-1,雷属性攻撃,1,本気,1,無傷,2,,,雷狼竜の雷電毛,4,雷狼竜の重殻,3,雷狼竜の天玉,1,超電雷光虫,10,1474',
'ジンオウＸレジスト,0,2,8,3,7,99,52,64,1,-2,-5,5,2,回避性能,2,気配,-1,雷属性攻撃,1,本気,1,,,雷狼竜の雷電毛,4,雷狼竜の重殻,3,雷狼竜の天玉,1,超電雷光虫,10,1479',
'ジンオウＺメイル,0,1,9,1,7,99,94,116,0,-2,0,-6,4,溜め短縮,3,回避性能,1,龍属性攻撃,2,回復量,-2,無傷,1,獄狼竜の重殻,4,獄狼竜の龍殻,3,雷狼竜の天玉,1,蝕龍蟲,5,1484',
'ジンオウＺレジスト,0,2,9,1,7,99,53,64,1,-1,1,-5,5,回避性能,2,龍属性攻撃,2,装填数,3,回復量,-1,無傷,1,獄狼竜の重殻,4,獄狼竜の龍殻,3,雷狼竜の天玉,1,蝕龍蟲,5,1489',
'ドーベルＸメイル,0,1,9,0,8,99,92,114,-3,0,0,0,4,耐震,3,回避性能,2,龍属性攻撃,2,腹減り,-2,無傷,2,太古の龍骨,3,堅牢な黒巻き角,2,堅牢な鳥竜骨,5,重厚な牙,5,1494',
'ドーベルＸレジスト,0,2,9,0,8,99,52,63,-2,1,1,1,5,回避性能,2,龍属性攻撃,1,装填速度,4,腹減り,-2,無傷,2,太古の龍骨,3,堅牢な黒巻き角,2,堅牢な鳥竜骨,5,重厚な牙,5,1499',
'ダマスクＸメイル,0,1,10,2,8,99,95,117,-3,2,3,-4,-1,雷属性攻撃,1,斬れ味,-2,匠,2,研ぎ師,1,抜刀減気,1,神々しい龍牙,2,蒼火竜の重殻,3,恐暴竜の唾液,2,峯山龍の上蒼鱗,4,1504',
'ダマスクＸレジスト,0,2,10,2,8,99,54,65,-2,3,4,-3,0,雷属性攻撃,1,装填速度,1,装填数,2,反動,-2,精密射撃,1,神々しい龍牙,2,蒼火竜の重殻,3,恐暴竜の唾液,2,峯山龍の上蒼鱗,4,1509',
'バンギスＸメイル,0,1,9,1,7,99,96,116,0,0,1,-4,-4,斬れ味,-2,匠,1,食事,4,怒,1,,,極悪な牙,2,恐暴竜の剛鉤爪,4,恐暴竜の厚黒皮,5,雷狼竜の天玉,1,1514',
'バンギスＸレジスト,0,2,9,1,7,99,54,64,0,0,3,-2,-2,装填数,1,反動,-2,食事,4,怒,1,,,極悪な牙,2,恐暴竜の剛鉤爪,4,恐暴竜の厚黒皮,5,雷狼竜の天玉,1,1519',
'月光【帷子】,0,1,10,0,8,99,100,118,1,0,-7,2,-1,匠,2,運気,-2,剥ぎ取り,2,闘魂,1,状態耐性,4,月迅竜の厚鱗,4,月迅竜の透刃翼,4,月迅竜の豪斑毛,3,迅竜の天鱗,2,1524',
'白影【帷子】,0,2,10,0,8,99,56,65,2,1,-6,3,0,装填数,2,運気,-2,剥ぎ取り,3,状態耐性,4,,,月迅竜の厚鱗,4,月迅竜の透刃翼,4,月迅竜の豪斑毛,3,迅竜の天鱗,2,1529',
'シルバーソルメイル,0,1,10,3,8,99,100,118,2,-7,0,-4,4,痛撃,1,斬れ味,2,回復量,-2,,,,,銀火竜の重殻,5,銀火竜の厚鱗,6,火竜の剛翼,3,重竜骨,3,1534',
'シルバーソルレジスト,0,2,10,3,8,99,56,65,3,-6,1,-3,5,痛撃,1,貫通弾強化,2,回復量,-2,,,,,銀火竜の重殻,5,銀火竜の厚鱗,6,火竜の剛翼,3,重竜骨,3,1539',
'ゴールドルナメイル,0,1,10,2,8,99,100,118,2,-4,0,-7,4,加護,2,重撃,1,雷耐性,-2,運気,2,,,金火竜の厚鱗,5,火竜の延髄,5,雌火竜の紅玉,2,メランジェ鉱石,4,1544',
'ゴールドルナレジスト,0,2,10,2,8,99,56,65,3,-3,1,-6,5,加護,1,重撃,1,雷耐性,-2,運気,2,,,金火竜の厚鱗,5,火竜の延髄,5,雌火竜の紅玉,2,メランジェ鉱石,4,1549',
'大和・真【胴当て】,1,1,10,1,8,99,104,120,4,1,-5,0,-5,溜め短縮,1,剣術,2,不動,2,底力,-2,無傷,2,峯山龍の重岩殻,6,神々しい龍牙,4,古龍の血,1,覇王の証,1,1554',
'陸奥・真【胴当て】,1,2,10,1,8,99,58,66,5,2,-4,1,-4,反動,1,貫通弾強化,3,不動,1,装填速度,-2,属性解放,2,峯山龍の重岩殻,6,神々しい龍牙,4,古龍の血,1,覇王の証,1,1559',
'日向・真【胸当て】,2,1,10,1,8,99,104,120,4,1,-5,0,-5,溜め短縮,1,剣術,1,不動,2,底力,-2,無傷,2,峯山龍の重岩殻,6,神々しい龍牙,4,古龍の血,1,覇王の証,1,1564',
'天城・真【胸当て】,2,2,10,1,8,99,58,66,5,2,-4,1,-4,反動,1,貫通弾強化,3,不動,1,装填速度,-2,属性解放,2,峯山龍の重岩殻,6,神々しい龍牙,4,古龍の血,1,覇王の証,1,1569',
'大和・極【胴当て】,1,1,10,3,8,99,104,120,-7,3,3,-2,-2,体力,1,スタミナ,-2,斬れ味,1,匠,1,,,神々しい龍牙,2,皇海龍の厚鱗,6,大地の龍神玉,1,巨大なヒレ,4,1574',
'陸奥・極【胴当て】,1,2,10,3,8,99,58,66,-6,4,4,-1,-1,攻撃,1,体力,1,スタミナ,-2,速射,1,,,神々しい龍牙,2,皇海龍の厚鱗,6,大地の龍神玉,1,巨大なヒレ,4,1579',
'日向・極【胸当て】,2,1,10,3,8,99,104,120,-7,3,3,-2,-2,体力,1,スタミナ,-2,斬れ味,1,匠,1,,,神々しい龍牙,2,皇海龍の厚鱗,6,大地の龍神玉,1,巨大なヒレ,4,1584',
'天城・極【胸当て】,2,2,10,3,8,99,58,66,-6,4,4,-1,-1,攻撃,1,体力,1,スタミナ,-2,速射,1,,,神々しい龍牙,2,皇海龍の厚鱗,6,大地の龍神玉,1,巨大なヒレ,4,1589',
'アビスメイル,0,1,10,1,8,99,106,120,-5,3,0,4,-7,達人,-3,気力回復,2,水流,2,刀匠,2,,,冥海竜の厚皮,4,冥海竜の剛角,3,海竜の剛尾,2,大地の龍神玉,1,1594',
'アビスレジスト,0,2,10,1,8,99,59,66,-4,4,1,5,-6,達人,-2,気力回復,2,水流,3,射手,2,,,冥海竜の厚皮,4,冥海竜の剛角,3,海竜の剛尾,2,大地の龍神玉,1,1599',
'ミラアルマハイド,0,1,10,2,8,99,106,120,4,0,-3,1,-7,攻撃,3,スタミナ,-1,本気,2,不動,1,,,煉黒龍の黒鱗,5,不死の心臓,3,煉黒龍の重翼,2,砕竜の天殻,1,1604',
'ミラアルマスキン,0,2,10,2,8,99,59,66,5,1,-2,2,-6,攻撃,3,スタミナ,-1,本気,2,不動,1,,,煉黒龍の黒鱗,5,不死の心臓,3,煉黒龍の重翼,2,砕竜の天殻,1,1609',
'訓練兵団スーツ,0,1,10,0,6,99,93,119,0,3,3,3,-4,体術,3,飛距離,3,斬れ味,3,,,,,訓練兵団入団証,2,尾槌竜の剛角,4,氷牙竜の重殻,3,霜降りのコブ,3,1644',
'訓練兵団ジャケット,0,2,10,0,6,99,53,66,1,4,4,4,-3,体術,3,飛距離,3,装填速度,3,,,,,訓練兵団入団証,2,尾槌竜の剛角,4,氷牙竜の重殻,3,霜降りのコブ,3,1647',
'キャプテンＪスーツ,0,1,10,0,7,99,88,116,-3,-3,-3,-3,-3,加護,-3,運気,2,剥ぎ取り,2,捕獲,3,,,伝説Ｊチケット,1,獄狼竜の重殻,3,獄狼竜の龍殻,2,白海竜の雷電殻,3,1625',
'キャプテンＪベスト,0,2,10,0,7,99,50,64,-2,-2,-2,-2,-2,加護,-3,運気,2,剥ぎ取り,2,捕獲,3,,,伝説Ｊチケット,1,獄狼竜の重殻,3,獄狼竜の龍殻,2,白海竜の雷電殻,3,1630',
'エスカドラＸソウル,0,1,10,2,8,99,108,120,-3,-2,3,3,-2,属性解放,1,無傷,1,回避距離,1,属性攻撃,1,気絶,-3,煌黒龍の天殻,6,煌黒龍の凶爪,6,天をつらぬく角,3,火竜の天鱗,1,1614',
'エスカドラＸゼーレ,0,2,10,1,8,99,60,66,-2,-1,4,4,-1,属性耐性,2,無傷,1,回避距離,2,属性攻撃,1,気絶,-3,煌黒龍の天殻,6,煌黒龍の凶爪,6,天をつらぬく角,3,火竜の天鱗,1,1619',
'ブルースタースーツ,0,1,10,2,6,99,93,119,1,1,1,1,1,龍属性攻撃,2,水の心,1,闘魂,2,,,,,スタジオGパス,1,蒼火竜の重殻,4,砕竜の重黒曜甲,2,砕竜の尖頭殻,2,1635',
'ブルースターベスト,0,2,10,2,6,99,53,66,2,2,2,2,2,龍属性攻撃,2,水の心,1,闘魂,1,,,,,スタジオGパス,1,蒼火竜の重殻,4,砕竜の重黒曜甲,2,砕竜の尖頭殻,2,1640'];