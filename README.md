
<!--

*** Thanks for checking out the Best-README-Template. If you have a suggestion

*** that would make this better, please fork the repo and create a pull request

*** or simply open an issue with the tag "enhancement".

*** Thanks again! Now go create something AMAZING! :D

-->

  
  
  

<!-- PROJECT SHIELDS -->

<!--

*** I'm using markdown "reference style" links for readability.

*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).

*** See the bottom of this document for the declaration of the reference variables

*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.

*** https://www.markdownguide.org/basic-syntax/#reference-style-links

-->
<div align="center">


[![Npm version][npm-package-badge]][npm-package-url]

[![MIT License][license-shield]][license-url]

[![LinkedIn][linkedin-shield]][linkedin-url]

</div>  

<h3  align="center">Ngx-Selected-FIlter</h3>

  

<p  align="center">

<br  />

<a  target="_blank" href="https://stackblitz.com/edit/angular-fgbctn?file=src%2Fapp%2Fapp.component.html">View Demo</a>

</p>

</p>

<!-- TABLE OF CONTENTS -->
### Table of Contents
   - [About the project](#about-the-project)
     - [Built with](##built-with)
     - [Dependencies](##dependencies)
   - [Usage](#usage)
     - [Installation](##installation)
     - [Setup](##setup)
   - [Options](#options)
   - [Contributing](##contributing)
   - [License](##license)
   - [Contact](##contact)


<!-- ABOUT THE PROJECT -->

## About The Project

  
- There are multiple scenarios where a dropdown option needs to be filtered based on the previous selected values i.e each dropdown option can be selected at most once.
- This scenario needs to be implemented with a custom code using the OnModelChange or onChange event to loop through the selected dropdowns and remove them from the other dropdown options.

- This project targets to remove this custom code to achieve the above mentioned functionality by exporting 2 directives (selectedFilterScope and selectedFilter)
  

### Built With

Following are the packages with versions used to create this library

| Package               | Version     |
| -----------           | ----------- |
| @angular/common       | 12.0.5      |
| @angular/compiler     | 12.0.5      |    
| @angular/core         | 12.0.5      |
| rxjs                  | 6.6.7       |    


### Dependencies

| ngx-selected-filter   | Angular     |
| -----------           | ----------- |
| 1.X                   | >=10.X      |    


<!-- USAGE EXAMPLES -->

## Usage

### Installation

```
npm install ngx-selected-filter --save
```

### Setup

**Step 1:**

Import NgxSelectedFilterModule in your project's modules
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgxSelectedFilterModule} from 'ngx-selected-filter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSelectedFilterModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**Step 2:**

Add `selectedFilterScope` directive at the root level of your dropdown.
This root level can be any HTML element which is a parent in heirarchy level w.r.t this select element.

**IMP: This directive can be used with any HTML element (div/form...) and does not support `<ng-container>`**
```
<div selectedFilterScope>
  <div *ngFor="let iterator of iterations;let i = index;">
    <label>Preferred Country {{i + 1}}</label>
    <select name="country">
        <option disabled selected>Select Country</option>
        <option *ngFor="let country of countries" [value]="country.id">
            {{country.name}}
        </option>
    </select>
  </div>
</div>
```

**Step 3:**

Add `selectedFilter` directive in the select tag, where filter functionality is expected. If filter is needed in multiple select tags, value of `name` attribute or any distinct string can be passed to this directive.

```
<div selectedFilterScope>
  <div *ngFor="let iterator of iterations;let i = index;">
    <label>Preferred Country {{i + 1}}</label>
    <select selectedFilter="country"  name="country">
        <option disabled selected>Select Country</option>
        <option *ngFor="let country of countries" [value]="country.id">
            {{country.name}}
        </option>
    </select>
  </div>
</div>
```

  
## Options

By default this library, sets the attribute of already selected dropdown value as `hidden`. But if this option needs to be shown with specific styling, this can be achieved by passing css class name to parameter `filterClass` where `selectedFilter` is used.

```
<select selectedFilter="country" name="country" filterClass="css-class-name">
    <option disabled selected>Select Country</option>
    <option *ngFor="let country of countries" [value]="country.id">{{country.name}}</option>
</select>
```

<!-- ROADMAP -->


<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.

  

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

  
  
  

<!-- LICENSE -->

## License

  
MIT

<!-- CONTACT -->

## Contact

  

Hemant Halwai - [@LinkedIn](https://www.linkedin.com/in/hemant-halwai-24986a198)

  

Project Link: [ngx-Selected-Filter](https://github.com/hemanthalwai/ngx-Selected-Filter)

  
  
  

<!-- ACKNOWLEDGEMENTS -->


<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[npm-package-badge]: https://img.shields.io/badge/npm%20package-1.0.1-green?style=for-the-badge&logo=appveyor

[npm-package-url]: https://www.npmjs.com/package/ngx-selected-filter

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge

[contributors-url]: https://github.com/hemanthalwai/ngx-Selected-Filter/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge

[forks-url]: https://github.com/hemanthalwai/ngx-Selected-Filter/network/members

[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge

[stars-url]: https://github.com/hemanthalwai/ngx-Selected-Filter/stargazers

[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge

[issues-url]: https://github.com/hemanthalwai/ngx-Selected-Filter/issues

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge

[license-url]: https://github.com/hemanthalwai/ngx-Selected-Filter/blob/main/LICENSE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/hemant-halwai-24986a198

[product-screenshot]: images/screenshot.png