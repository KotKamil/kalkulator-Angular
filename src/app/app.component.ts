import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'kalkulator';
	elementsValues: string[] = ['9', '8', '7', '+', '6', '5', '4', '-', '3', '2', '1', '*', '.', '0', '/'];
	panelValue = "";
	comaBool: boolean = false;
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