import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  @ViewChild('searchInput') searchInput!: ElementRef;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  focusSearch() {
    this.searchInput.nativeElement.classList.remove('hidden');
    this.searchInput.nativeElement.focus();
  }

  toggleSearch(show: boolean) {
    if (!show) {
      this.searchInput.nativeElement.classList.add('hidden');
    }
  }
}
