import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


user = {
  name: '',
  email: '',
  phone: '',
  profilePicture:''
};
private _storage: Storage | null = null;


  constructor( private storage:Storage) {
    this.init();
   }

  ngOnInit() {
  }

 
  

    changeProfilePicture() {
      Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos // Or CameraSource.Camera for direct camera access
      }).then(image => {
        // Set the base64 image data as the profile picture
        this.user.profilePicture = `data:image/jpeg;base64,${image.base64String}`;
      }).catch(error => {
        console.error('Error taking picture:', error);
      });
    }
    
    async init() {
      this._storage = await this.storage.create();

    }
    async saveProfile() {
      if (this._storage) {
        try {
          await this._storage.set('userProfile', this.user);
          console.log('Profile saved successfully');
        } catch (error) {
          console.error('Error saving profile:', error);
        }
      }
    }
   
  }
