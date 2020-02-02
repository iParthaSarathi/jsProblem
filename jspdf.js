/*
1)pest  the function in your jspdf js file 
2)declare the call function in a autoTable

*/




/*-------------------------------------------------------------------------------------------*/
  function dynaBld(uColor,x,y,doc,fnt1,colr1,string1,un1,fnt2,colr2,string2,un2,fnt3,colr3,string3,un3,fnt4,colr4,string4,un4){
      /*|'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''|
        | for add more string for complicated use case just  copy the last block of code from start comment to  |
        | end  then increment the variables for all of new created  block   by one(+1)  (str4Width => str5Width)|
        | then increase the parameter also for sent and recive (keep unchange the first and second block)       |
        |,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,|*/

    /*------------@@----------block-string 1 placement Creation-----@@---------*/
    // console.log(uColor+"---"+x+"---"+y+"---"+doc+"---"+fnt1+"---"+colr1+"---"+string1+"---"+un1+"---"+fnt2+"---"+colr2+"---"+string2+"---"+un2+"---"+fnt3+"---"+colr3+"---"+string3+"---"+un3+"---"+fnt4+"---"+colr4+"---"+string4+"---"+un4);


          doc.setLineWidth(0.2);//common underline width
          doc.setFont('proximaNova')
          doc.setDrawColor(uColor[0],uColor[1],uColor[2]);//common underline color
          var str1=string1.split(" ");
          var s1=0,str1Width=x,str1height=y,Str1WidthCount=1,s1Wordount=190-(x-5);
          doc.setTextColor(colr1);
          doc.setFontType(fnt1);

          if(fnt1=='bold'){
            doc.setFont('proximaNovaBold')
            doc.setFontSize(8.7);
            s1Wordount=191-(x-5);
          }else {
            doc.setFont('proximaNova');
            doc.setFontSize(9);
            s1Wordount=190-(x-8);
          }
            for(s1=0;s1<str1.length;s1++){
if(str1Width>(s1Wordount)){
  str1Width=x;
  str1height=y+((3.2)*Str1WidthCount); //for count weight
  Str1WidthCount=Str1WidthCount+1; //
}
doc.text(str1[s1]+" ",str1Width,str1height);
              if(un1=='y'){
doc.line(str1Width, str1height+0.5,(str1Width+doc.getTextWidth(str1[s1]+" ")),  str1height+0.5);//(width,height,width,height)
              }
str1Width=str1Width+doc.getTextWidth(str1[s1]+" ")
            }
            /*------------------------@@----------End block-string-1-------@@-----------------------*/
            /*--------@@------------block-string 2 Placement Creation------------@@-------------*/
            doc.setFont('proximaNova')
            var str2=string2.split(" ");
            var s2=0,str2Width=x,str2height=str1height,Str2WidthCount=Str1WidthCount,s2Wordount=190-(x-5);

            if(str1Width<190){
              str2Width=str1Width;
            }
            doc.setTextColor(colr2);
            doc.setFontType(fnt2);
            if(fnt2=='bold'){
              doc.setFont('proximaNovaBold')
              doc.setFontSize(8.7);
              s2Wordount=191-(x-5);
            }else {
              doc.setFont('proximaNova');
              doc.setFontSize(9);
              s2Wordount=187-(x-8);
            }
            for(s2=0;s2<str2.length;s2++){
if(str2Width>(s2Wordount)){
  str2Width=x;
  str2height=y+((3.2)*Str2WidthCount); //for count weight
  Str2WidthCount=Str2WidthCount+1; //
}
doc.text(str2[s2]+" ",str2Width,str2height);
if(un2=='y'){
  doc.line(str2Width, str2height+0.5,(str2Width+doc.getTextWidth(str2[s2]+" ")),  str2height+0.5);//(width,height,width,height)
}
str2Width=str2Width+doc.getTextWidth(str2[s2]+" ")
            }
          /*------------------------@@----------End block-string-2-------@@------------------------*/
          /*--------@@------------block-string 3 Placement Creation------------@@-------------*/
          doc.setFont('proximaNova');
            var str3=string3.split(" ");
            var s3=0,str3Width=x,str3height=str2height,Str3WidthCount=Str2WidthCount,s3Wordount=190-(x-5);
            if(str2Width<190){
              str3Width=str2Width;
            }

            doc.setTextColor(colr3);
            doc.setFontType(fnt3);
            if(fnt3=='bold'){
              doc.setFont('proximaNovaBold')
              doc.setFontSize(8.7);
              s3Wordount=191-(x-5);

            }else {
              doc.setFont('proximaNova');
              doc.setFontSize(9);
              s3Wordount=187-(x-8);
            }
            for(s3=0;s3<str3.length;s3++){
if(str3Width>(s3Wordount)){
  str3Width=x;
  str3height=y+((3.2)*Str3WidthCount); //for count weight
  Str3WidthCount=Str3WidthCount+1; //
}
doc.text(str3[s3]+" ",str3Width,str3height);
if(un3=='y'){
  doc.line(str3Width, str3height+0.5,(str3Width+doc.getTextWidth(str3[s3]+" ")),  str3height+0.5);//(width,height,width,height)
}
str3Width=str3Width+doc.getTextWidth(str3[s3]+" ")
            }
          /*------------------------@@----------End block-string-3-------@@-----------------------*/
          /*--------@@------------block-string 4 Placement Creation------------@@-------------*/
          doc.setFont('proximaNova')
          var str4=string4.split(" ");
          var s4=0,str4Width=x,str4height=str3height,Str4WidthCount=Str3WidthCount,s4Wordount=190-(x-5);
          if(str3Width<190){
            str4Width=str3Width;
          }
          doc.setTextColor(colr4);
          doc.setFontType(fnt4);
          if(fnt4=='bold'){
            doc.setFont('proximaNovaBold')
            doc.setFontSize(8.7);
            s4Wordount=191-(x-5);
          }else {
            doc.setFont('proximaNova');
            doc.setFontSize(9);
            s4Wordount=187-(x-8);
          }
          for(s4=0;s4<str4.length;s4++){
              if(str4Width>(s4Wordount)){
str4Width=x;
str4height=y+((3.2)*Str4WidthCount); //for count weight
Str4WidthCount=Str4WidthCount+1; //
              }

              doc.text(str4[s4]+" ",str4Width,str4height);
              if(un4=='y'){
doc.line(str4Width, str4height+0.5,(str4Width+doc.getTextWidth(str4[s4]+" ")),  str4height+0.5);//(width,height,width,height)
              }
              str4Width=str4Width+doc.getTextWidth(str4[s4]+" ")
          }
          /*------------------------@@----------End block-string-4-------@@-----------------------*/
          }

          /*---------------------------------------to sent data ----------------------------------------*/
  //fnt=text bold/normal ,colr=color of every strig  , un=string contain underline or not (y/n)  , uColor=underline color must be in rgb in array
          var fnt1='normal',
      fnt2='bold',
      fnt3='normal',
      fnt4='normal',
      colr1='#000000',
      colr2='#000000',
      colr3='#000000',
      colr4='#000000',
      un1='n',
      un2='n',
      un3='n',
      un4='n',
      uColor=[95, 95, 95],
      x=23,y=30,

          string1='If you have used AngularJS before, then you may hate React at first',
          string2='mainly because of it’s one-way data flow and lack of',
          string3='“framework” where you need to take care of many other things yourself. ',
          string4='';

   dynaBld(uColor,x,y,doc,fnt1,colr1,string1,un1,fnt2,colr2,string2,un2,fnt3,colr3,string3,un3,fnt4,colr4,string4,un4)

   // use this style for text underline and create bold text or change color

