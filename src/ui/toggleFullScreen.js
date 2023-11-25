// Fullscreen Toggle
export const toggleFullScreen = () {
    document.addEventListener("dblclick", function () {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    });
    document.addEventListener("keypress", function (event) {
      if (event.key === "f" || event.key === "F") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }
  