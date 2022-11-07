import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'kalkulator';
	panelValue = "";
	wstaw = (numberValue: string) => {
		this.panelValue += numberValue;
	}

	oblicz = () => {
		this.panelValue = eval(this.panelValue);
	}

	wyczysc = () => {
		this.panelValue = "";
	}
}
