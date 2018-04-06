import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../_models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../_services/user.service';
import {Subscription} from 'rxjs/Subscription';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  subscription: Subscription;
  userImageUrl = 'assets/img/No_Profile_Picture.png';
  editIconUrl = 'assets/img/editIcon.png';
  selectedImage: File = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private http: HttpClient) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    this.subscription = this.userService.editedUser
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  onImageSelected(image) {
    const fileExtension = '.' + image.target.files[0].name.split('.').pop();
    image.renameFilename = this.user.userName + fileExtension;
    this.selectedImage = <File>image;

    const fd = new FormData();
    console.log(this.selectedImage.name);
    fd.append('image', this.selectedImage, this.selectedImage.name);
    // this.userService.editImage(fd);
    this.http.post('assets/img/UserImages/', fd)
      .subscribe(res => {
        console.log(res);
      });
  }

  onEdit() {
    this.user = this.route.snapshot.data['user'];
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
