import MainPage from "../main";
import Page from "../../core/templates/page";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";

class App {
  private container: HTMLElement;

  private initialPage: MainPage;

  static renderNewPage(idPage: string) {
    document.body.innerHTML = "";
    let page: Page | null = null;
    // if (page === null) throw new Error("Error");

    if (idPage === "main-page") {
      page = new MainPage(idPage);
    } else if (idPage === "settings-page") {
      page = new SettingsPage(idPage);
    } else if (idPage === "statistics-page") {
      page = new StatisticsPage(idPage);
    }
    if (page) {
      const pageHTML = page.render();
      document.body.append(pageHTML);
    }
  }

  constructor() {
    this.container = document.body;
    this.initialPage = new MainPage("main-page");
  }

  run() {
    // const mainPageHTML = this.initialPage.render();
    // this.container.append(mainPageHTML);
    App.renderNewPage("statistics-page");
  }
}

export default App;
