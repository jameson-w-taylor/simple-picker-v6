import { Component } from '@angular/core';
import { PickerController, PickerOptions } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private picker: PickerController) {}

  async openPicker() {
    const test = await this.picker.create({
      columns: [{
        name: 'test',
        options: [
          { text: 'Value 1', value: 1 },
          { text: 'Value 2', value: 2 }
        ]
      }],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Confirm', handler: this.handleConfirm }
      ]
    });
    return test.present();
  }

  private handleConfirm(pickerValue: any) {
    console.log('Picker confirm result: ', pickerValue);
  }

}
