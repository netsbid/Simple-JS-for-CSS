var dom = document.getElementsByTagName("*");
for (i=0;i<dom.length;i++){
    if(dom[i].className.length > 0){
        c = dom[i].className.split(" ");
        for (j=0;j<c.length;j++){
            if(c[j].startsWith('fl'))dom[i].style.float="left";
            if(c[j].startsWith('fr'))dom[i].style.float="right";
            if(c[j].startsWith('fc'))dom[i].style.margin="0 auto";
			if(c[j].startsWith('cb'))dom[i].style.clear="both";
            if(c[j].startsWith('dx'))dom[i].style.display="none";
            if(c[j].startsWith('db'))dom[i].style.display="block";
            if(c[j].startsWith('C' ))dom[i].style.textAlign="center";
            if(c[j].startsWith('L' ))dom[i].style.textAlign="left";
            if(c[j].startsWith('R' ))dom[i].style.textAlign="right";
            if(c[j].startsWith('J' ))dom[i].style.textAlign="justify";
            if(c[j].startsWith('c' ))dom[i].style.color=c[j].substring(1);
            if(c[j].startsWith('w' ))dom[i].style.width=c[j].substring(1)+"px";
            if(c[j].startsWith('w_'))dom[i].style.width=c[j].substring(2)+"%";
            if(c[j].startsWith('h' ))dom[i].style.height=c[j].substring(1)+"px";
            if(c[j].startsWith('m.'))dom[i].style.margin=c[j].substring(2)+"px";
            if(c[j].startsWith('p' ))dom[i].style.padding=c[j].substring(1)+"px";
            if(c[j].startsWith('bg'))dom[i].style.backgroundColor=c[j].substring(2);
            if(c[j].startsWith('b' ))dom[i].style.border=c[j].substring(1)+"px solid #CCC";
			if(c[j].startsWith('bt'))dom[i].style.borderTop=c[j].substring(2)+"px solid #CCC";
			if(c[j].startsWith('br'))dom[i].style.borderRight=c[j].substring(2)+"px solid #CCC";
			if(c[j].startsWith('bb'))dom[i].style.borderBottom=c[j].substring(2)+"px solid #CCC";
			if(c[j].startsWith('bl'))dom[i].style.borderRight=c[j].substring(2)+"px solid #CCC";
            if(c[j].startsWith('r' ))dom[i].style.borderRadius=c[j].substring(1)+"px";
			if(c[j].startsWith('s.'))dom[i].style.boxShadow = "0 0 "+c[j].substring(2)+"px #AAA";
            if(c[j].startsWith('_' )){dom[i].style.float="left";s = c[j].substring(1).split("_");dom[i].style.width=((Number(s[0])/Number(s[1]))*100)+"%";}
			if(c[j].startsWith('m_' )){s = c[j].substring(2).split(",");dom[i].style.margin=s[0]+"px "+s[1]+"px ";}
			if(c[j].startsWith('m_' )){s = c[j].substring(2).split(".");dom[i].style.margin=s[0]+"px "+s[1]+"px "+s[2]+"px "+s[3]+"px";}
			if(c[j].startsWith('p_' )){s = c[j].substring(2).split(",");dom[i].style.padding=s[0]+"px "+s[1]+"px ";}
			if(c[j].startsWith('p_' )){s = c[j].substring(2).split(".");dom[i].style.padding=s[0]+"px "+s[1]+"px "+s[2]+"px "+s[3]+"px";}
        }
    }
}