import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { ArticleData } from './../../models/article-data';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnChanges {
  @Input() item: ArticleData;
  public show = false;
  constructor(private crudService: CrudService) {
  }

  ngOnChanges() {
    if (this.item) {
      this.show = true;
    }
  }

  deleteArticle(item: ArticleData) {
    this.crudService.deleteArticle(item);
  }

  editArticle(item: ArticleData) {
    this.crudService.editArticle(item);
  }
}
