global.client = client;
client.config = {

  token : "ODMzMDMyNzM3ODcwMDUzNDM0.YHscMQ.j9_D5Kjipnj0HtqHIzDGTqfAJhE", //Bot Token
  prefix : ".", //Bot Prefix
  guildid : "830748991325995058", //Sunucu ID
  sahip : "741364768472039495", //Sahip ID
  footer : "Moderasyon❤️renbow", //Bot Bio
  status : "idle", //online //çevrim içi || idle // boşta || dnd //rahatsız etmeeyin || invisible /görünmez
  botses : "833385404832546836", //Botun gireceği ses kanal id si  

  owner : "744501334518136905", //Sunucu Genel Kurucusu
  cezapuan : "832162138235469844", //Ceza Puan Log Kanalı
  booster : "831494219599183892", //Booster Rol


  taglar : {
    tag : "", //Tag 1
    TagVarYok : false, //False ise sadece tagı alır kayıtlarda eğer true ise 2. tagı aktif eder tag rolü olmayana tag2 verir
    tag2 : "", //Tag 2
    tagrol : "", //Tag Rolü
  },

  SadeceTaglı : false, //False ise herkes kullana bilir //True ise sadece taglı ve booster kullana bilir

  chatmute : {
    yetkili : "833000548089200670", //Chat Mute Yetkili
    log : "832162138235469844", //Chat Mute
    rol : "832153627694989423", //Chat Mute Rolü
  },
  
  voicemute : { 
    yetkili : "833000548089200670", //Voice Mute Yetkili
    log : "832162138235469844", //Voice Mute
    rol : "832153627694989423", //Voice Mute Rolü
  },

  meeting : {
    log : "", //Meeting Ses Kanalı
  },

  jail : {
    yetkili : "", //Jail Yetkili
    rol : "", //Jailli Rol
    log : "", //Jail Log
  },

  ban : {
    forceban : "832543347188432906", //Force Ban Yetkili
    banyetkili : "833000611377184798", //Normal Ban Yetkilisi
    log : "832162138235469844", //Logu
    banlimit : 3, //Ban Limitin Kaç olacağını yazınız Örnek (3 : yetkili 3 kere ban attıktan sonra yetkisini çeker)
  },

  allmute : {
    yetkili : "832543346417074197", //All Mute Yetkili
  },

  karaliste : {
    yetkili : "832543346417074197", //Kara Liste Yetkili 
    log : "832162138235469844", //Kara liste Log
  },
  cezabilgi : {
    yetkili : "832543346417074197", //Ceza Bilgi Yetkili
  },
  
  yetkilisay : {
    yetkili : "832543346417074197", //Komutu Kullanacak Yetkili
    altyetkili : "832543377403805736", //En Alt Yetkili
  },

  kilit : {
    yetkili : "832543346417074197", //Kanal Kilit Yetkili
  },

  guildMemberAdd : {
    guvenli : "830749458324389928", //7 Gün Önce Açılmış Hesap Log
    forceban : "832162138235469844", //Kalıcı Ban log (Kalıcı ban yemiş üyenin banı açılmıştır ve sunucuya tekrar girese ban atar bunu logu)
    jail : "", //Jailli üye çık gir yaparsa
  },

  trasport: {
    yetkili : "832543346417074197", //Çek Yetkili
  },

  register : {
    erkek : ["832543377403805736"], //Erkek Rollerini Sırayla Giriniz
    kız : ["832543376493641769"], //Kız Rollerini Tek Tek Giriniz
    kayıtsız : "832543377978556467", //Kayıtsız Rol ID
    yetkili : "832571642575323216", //Register Yetkili
  },

  emoji : {

    sıfır : "0", //0 Emoji Örnek : <a:sıfır:1234567891011>
    bir : "1", //1 Emoji Örnek : <a:bir:1234567891011>
    iki : "2", //2 Emoji Örnek : <a:iki:1234567891011>
    üç : "3", //3 Emoji Örnek : <a:üç:1234567891011> 
    dört : "4", //4 Emoji Örnek : <a:dört:1234567891011>
    beş : "5" , //5 Emoji Örnek : <a:beş:1234567891011>
    altı : "6", //6 Emoji Örnek : <a:altı:1234567891011>
    yedi : "7", //7 Emoji Örnek : <a:yedi:1234567891011>
    sekiz : "8", //8 Emoji Örnek : <a:sekiz:1234567891011>
    dokuz : "9", //9 Emoji Örnek : <a:dokuz:1234567891011>

    onay : "✅", //Onay Emoji ID Sayı Olarak Örnek : onay : "1123023109213",
    red : "❌", //Red Emoji ID Sayı Olarak Örnek : onay : "1123023109213",
  },

}
