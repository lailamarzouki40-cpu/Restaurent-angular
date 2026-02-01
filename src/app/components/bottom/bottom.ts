import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom.html',
  styleUrls: ['./bottom.css']
})
export class Bottom {
  openingHours = [
    { day: 'Monday', hours: '10:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '10:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '10:00 AM - 11:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'fab fa-facebook-f' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'fab fa-instagram' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' },
    { name: 'TikTok', url: 'https://tiktok.com', icon: 'fab fa-tiktok' },
  ];
}
