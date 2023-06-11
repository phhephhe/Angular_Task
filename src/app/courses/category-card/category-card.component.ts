import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { DatafrombackService } from 'src/app/services/datafromback.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardtComponent implements OnInit {
  // იღებს მშობლიდან ინფორმაციას თითოეულ კატეგორიაზე
  @Input() category!: any;

  // იქმნება ობსერვებელ ცარიელი ცვლადი და
  //ფუნქციაში ენიჭება კურსის გაკვეთილების ლისტი
  courseLessonsList$! : Observable <any>

  // შემოყვანილია routing ის საჭირო სერვისი და
  // ინფორმაციის სერვისი get მეთოდი სადაცაა აღწერილი
  constructor(
    private DatafrombackService: DatafrombackService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  // ამ ფუნქციაში ვწვდებით routing ში აღწერილ პარამეტრს
  // შემდეგ ამას არ ვასაბსქრაიბებთ და დაჭერილ პარამეტრებს
  // ვაგზავნით კურსის გაკვეთილების ლისტის წამოსაღებად 
  // function - ში რომელიც გამოვიძახეთ სერვისიდან.
  ngOnInit(): void {
    this.courseLessonsList$ =  this.ActivatedRoute.params.pipe(
      switchMap((params) => {
        return this.DatafrombackService.getCourseLessons(params['courseId']);
      })
    );
  }
}
