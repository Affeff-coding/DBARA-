
var adham = document.getElementById("eggs");
var tamaaatem= document.getElementById("tomate");
var thouum = document.getElementById("thoum");
var crouvat=document.getElementById("crevettes");
var kammmoun = document.getElementById("kammoun");
var homss=document.getElementById("homs");
var nnwaser=document.getElementById("nwaser");
var djej =document.getElementById("poulet");
var tconcen =document.getElementById("tomateconcentré");
var felfelahmar =document.getElementById("felfelahmar");
var felfelakhdhar =document.getElementById("poivronvert");
var battata =document.getElementById("pommedeterre");
var kra =document.getElementById("kraae");
var jelbena =document.getElementById("jelbena");
var bagri =document.getElementById("bagri");
var ferina =document.getElementById("farine");
var houtt =document.getElementById("poisson");
var korkob =document.getElementById("curcum");
var basal =document.getElementById("oignon");
var hlib =document.getElementById("hlib");
var tenn =document.getElementById("thon");
var tchich =document.getElementById("chorbafrik");
var makrouna =document.getElementById("makarouna");
var kosksi =document.getElementById("couscous");
var samid =document.getElementById("smid");
var lhamallouch =document.getElementById("allouch");
var chorbala=document.getElementById("chorbaoiseau");
var riz=document.getElementById("rouz");
var mlou=document.getElementById("mloukhiya");
var mafroumdine=document.getElementById("dinde-haché");
var mafroumlham=document.getElementById("bagri-haché");
var loubiaa=document.getElementById("loubiya");
var sbnekh=document.getElementById("epinard");
var sneriya=document.getElementById("carottes")

function searchShow() {
  if (adham.checked==true & tamaaatem.checked==true) 
    {document.getElementById("EJJA").style.display = "block";}  
  if (crouvat.checked==true & tamaaatem.checked==true)
  {document.getElementById("S.CR").style.display = "block";}  
  if (adham.checked==true & kammmoun.checked==true & homss.checked==true)
  {document.getElementById("lablebi").style.display = "block";} 
  if(nnwaser.checked==true & djej.checked==true)
    {document.getElementById("nawaser").style.display = "block";}
    if(adham.checked==true & felfelakhdhar.checked==true & battata.checked==true & kra.checked==true)
      {document.getElementById("kaafteji").style.display = "block";}
      if(bagri.checked==true & jelbena.checked==true & tamaaatem.checked==true)
      {document.getElementById("jjelbena").style.display= "block";}
     if(ferina.checked==true & tamaaatem.checked==true & adham.checked==true) 
       {document.getElementById("pitza").style.display= "block";}
      if(houtt.checked==true & korkob.checked==true & kammmoun.checked==true & basal.checked==true & tamaaatem.checked==true & felfelakhdhar.checked==true)
     {document.getElementById("mosli").style.display="block";}
     if(hlib.checked==true & tenn.checked==true & battata.checked==true & adham.checked==true & ferina.checked==true)
      {document.getElementById("frikass").style.display= "block";}
    if (tchich.checked==true & houtt.checked==true)
      {document.getElementById("tchichhout").style.display="block";}
    if(crouvat.checked==true & tconcen.checked==true & makrouna.checked==true)
      {document.getElementById("makcrou").style.display="block";}
    if(houtt.checked==true & kosksi.checked==true)
      {document.getElementById("kesksihout").style.display="block";}
    if (samid.checked==true & lhamallouch.checked==true)
     {document.getElementById("bezin").style.display="block";}
    if (chorbala.checked==true & houtt.checked==true)
     {document.getElementById("chorbahout").style.display="block";}
    if (kammmoun.checked==true & bagri.checked==true)
     {document.getElementById("kamounia").style.display="block";}
   if (ferina.checked==true & adham.checked==true & tenn.checked==true & samid.checked==true)
     {document.getElementById("banadhej").style.display="block";}
   if (riz.checked==true & crouvat.checked==true)
    {document.getElementById("rizcre").style.display="block";}
  if (bagri.checked==true & mlou.checked==true || lhamallouch.checked==true & mlou.checked==true)
    {document.getElementById("mlokhia").style.display="block";}
  if (lhamallouch.checked==true)
    {document.getElementById("borgholall").style.display="block";}
  if (chorbala.checked==true & djej.checked==true)
    {document.getElementById("chorbamfdj").style.display="block";}
  if (mafroumdine.checked==true || mafroumlham.checked==true)
     {document.getElementById("lazania").style.display="block";}
   if (mafroumdine.checked==true || mafroumlham.checked==true)
     {document.getElementById("in").style.display="block";}
   if (loubiaa.checked==true)
     {document.getElementById("loubi").style.display="block";}
  if (felfelakhdhar.checked==true)
     {document.getElementById("felfelm").style.display="block";}
   if (sbnekh.checked==true)
   {document.getElementById("tajin").style.display="block";}
 if (adham.checked==true)
   {document.getElementById("in").style.display="block";}
 if(sneriya.checked==true)
  {document.getElementById("houri").style.display="block";}

 



    }
