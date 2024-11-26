import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        const background = document.getElementById('gradientBackground');
        if (background) {
            const xPercent = (event.clientX / window.innerWidth - 0.5) * 100;
            const yPercent = (event.clientY / window.innerHeight - 0.5) * 100;
            background.style.backgroundPosition = `${50 + xPercent}% ${50 + yPercent}%`;
        }
    }

}
