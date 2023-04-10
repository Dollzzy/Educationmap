
 var PrincipalPage = document.getElementById('PrincipalPage')
 var SearchMenu = document.getElementById("SearchMenu")
 var searchrezult = document.getElementById("searchrezult")
 var SearchINP = document.getElementById("SearchINP")
 var Searchinp = document.getElementById("Searchinp")
 var backPP = document.getElementById('backPP')
 var inpSR = document.getElementById('inpSR')
 var elemnt1 = document.getElementById("elemnt1")
 var backPr = document.getElementById("backPr")
 var Substantivul = document.getElementById("Substantivul")
 var link = document.getElementById("link")
 var menuPP = document.getElementById('menuPP')
 var MenuBtn = document.getElementById('MenuBtn')
 var SettingsClosePP = document.getElementById('SettingsClosePP')
 var MenuClosePP = document.getElementById("MenuClosePP")
 var btnSettings = document.getElementById("btnSettings")
 var SettingsOpen = document.getElementById("SettingsOpen")
 var VersionOpen = document.getElementById("VersionOpen")
 var VersionClosePP = document.getElementById("VersionClosePP")
 var btnVer = document.getElementById("btnVer")
 SearchINP.addEventListener('keypress', function (e) {
      var inp2 = SearchINP;
      if (e.key === 'Enter') {
        Searchinp.value = inp2.value
        SH()
        PrincipalPage.style.display = 'none'
        SearchMenu.style.display = 'block'
      }
  });
  inpSR.addEventListener('keypress', function (e) {
      var inp3 = inpSR;
      if (e.key === 'Enter') {
        Searchinp.value = inp3.value
        SH()
        searchrezult.style.display = 'none'
        SearchMenu.style.display = 'block'
      }
  });
  backPP.addEventListener('click',()=> {
      PrincipalPage.style.display = 'block'
        SearchMenu.style.display = 'none'
  })
  link.addEventListener('click',()=> {
    searchrezult.style.display = 'none'
    Substantivul.style.display = 'block'
})
  backPr.addEventListener('click',()=> {
    searchrezult.style.display = 'block'
    Substantivul.style.display = 'none'
})

  elemnt1.addEventListener('click',()=> {
      searchrezult.style.display = 'block'
        SearchMenu.style.display = 'none'
        inpSR.value = 'substantiv'
  })
  MenuBtn.addEventListener('click',()=> {
    menuPP.style.display= 'block'
  })
  MenuClosePP.addEventListener('click',()=> {
    menuPP.style.display= 'none'
  })

  btnSettings.addEventListener("click", ()=> {
    SettingsOpen.style.display = 'block'
  })
  btnVer.addEventListener("click", ()=> {
    VersionOpen.style.display = 'block'
  })
  SettingsClosePP.addEventListener("click", ()=> {
    SettingsOpen.style.display = 'none'
  })
  VersionClosePP.addEventListener("click", ()=> {
    VersionOpen.style.display = 'none'
  })

  function SH() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("Searchinp");
      filter = input.value.toUpperCase();
      ul = document.getElementById("list");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }