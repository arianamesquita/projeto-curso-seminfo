import {LiveAnnouncer} from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PrincipalService } from 'src/app/service/principal.service';

export interface Pessoas {
  nome: string;
  cargo: string;
  curso: string;
  dataNascimento: Date;
}

const mockDate = new Date('2023-01-01T00:00:00Z');

const ELEMENT_DATA: Pessoas[] = [
  {nome: 'Ariana', cargo: "estudante", curso: 'SI', dataNascimento: mockDate},
];

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['nome', 'cargo', 'curso', 'dataNascimento'];
  dataSource = new MatTableDataSource();
  pessoas: any = [];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private service: PrincipalService
  ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(){
    //const data = sessionStorage.getItem('pessoas') || '[]';
    //cargthis.pessoas = JSON.parse(data);
    this.service.currentData.subscribe(data => {
      this.pessoas = data;
    });
    this.dataSource.data = this.pessoas;
    this.getMockPessoasAPI();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getMockPessoasAPI(){
    this.service.getPeople().subscribe((data) => {
      //this.pessoas = data;
      this.dataSource.data = data;
    })
  }

}
