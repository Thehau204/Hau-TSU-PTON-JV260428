function toggleMode() {
      let page = document.getElementById("page");

      if (page.style.backgroundColor === "black") {
        page.style.backgroundColor = "white";
        page.style.color = "black";
      } else {
        page.style.backgroundColor = "black";
        page.style.color = "white";
      }
    }