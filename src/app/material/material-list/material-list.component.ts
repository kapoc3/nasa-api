import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  listaEstudiantes:Estudiante[] = [];

  estudiante1:Estudiante;
  estudiante2:Estudiante;
  estudiante3:Estudiante;

  constructor() { }

  ngOnInit(): void {
    console.log("inicializando el componente");
    this.estudiante1 = {
        id:1,
        nombre:"Kapoc",
        ciudad:"Bogota",
        fotoURL:"data:image/jpeg;base64,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"
    };

    this.estudiante2 = {
      id:2,
      nombre:"Joseph",
      ciudad:"Medellin",
      fotoURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFhUVFhUYFRcVFRUVGBgVFhYXFxUWFhgYHSggGBslHRcVITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGi0lHSUtKy8tLS0tLS0tLS0tLS0tKy0tLS0tKy0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tNy0tLf/AABEIAN8A4gMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQMEBwIFBgj/xAA/EAABAwIDBQYEAgkDBQEAAAABAAIRAyEEEjEFQVFhcQYTIoGRoTKxwdEH8CNCUmJygpKy4RQVwiRTc6LxNf/EABkBAQEBAQEBAAAAAAAAAAAAAAACAQMEBf/EACQRAQEAAgIDAQACAgMAAAAAAAABAhEhMQMSQVEEYSLBBRMy/9oADAMBAAIRAxEAPwC1UIQpdAhCEAhCEAhCEAhCEAhCEAhCEAhAQgISJUIwiEqECQsSFkghBhCISpFTSJEqECEISpCsAkQhA+hCFgEIQgEIQgEIQgEIQgEIQgEJC4KHi9rUaXx1Gt5FwlGyJqFpx2mwp0rNPS6cp7eon9Y/0lG+t/G0SFRqePpu0d6gj5qUibNESpEIwqRCECFIskhC0YlIsisVrQhCRYCEIlC0PIQhSBCEIBCEIBCEIBCEIBajbe3aeHBkgmNPvwCw7TbcbhqZNsxFh9TyVN7e2m95JcSXPMgHU/vOHyGgWOuGG+a2naLtxVqEtbULW/u2XJVNoNOoeTxJUihs8EzUMkqXW2fRA+EzzcyJ5hpkeqe0dvTLXBnZ1BlazYn0KlsqVaDwwO4RNwd0EFahgNGoHNkQRIPDf1C2uNqFzcxMlrmwfWVlVj1y32zduuY/LUGWZ0uPMHUfJd3sLbgLu7PAkX4RIHJVPtqvmpipoQWkeYv81LrbQfSc1wmbx5zE+ZK2JzxlXlSqhwBGhWa5PsXtXO3Kd9xy8LZ+q6xHlyx9boJEqRakqRKhAhWJWaxKDFIlhCppEIQgdQhCkCEIQCEIQCEIQBKiY/HNpNJJExYTHmeAWO08c2k0uJHKeK4TbmOPdGvUJl96bdPDue7m7cNwHNHTDDbn+1e1zVqlxJMeQtoAFzFNxc4vdrrfcPz9EuJrZonfJKXaAyUuBcfbU/MKXq4kQa2OcT4THPkm++d166pzZ9AOff4Wgud/C0En5Lp+znZkYh2etVDQ4NcRB0dcN04QtuWOLnJlk5J2KcRlJkbp3dFMq4whmXiQSekiPdWXW/D/AAbh4HgX/a9jKSn2Bwob4qgc695J19lF8uCphlPqttoY0OpspzpBdytEc7KVhcQakvcPCxsNuJJFh11Mrqtp9gqcRRkndckeq1LOwWLEuGQRuc8SeUAET1T/ALPHrsuOcu3Q9j9qMD2QbbxvFnCD1tZWpTdIBVH7F2Tlc2o18nM5pEEQ/dmG/hyVpdndq942H2eLOB1tafLjvBCrG7R5sN8t+hCFTzEQlQjAgoQgxhIVmkQNwlSoVNZoQhSBCEIBCEIBCE3iHQ0nkjXGdpKvfVRTnwyc3JoEvP8Aa3zXE9udpZnZR8OnkBp5C3mt1iccc9R03IdHm8k/2geS4batcPqkatZM8zNz6wP5Vj1yahjCszVGt6T5kT7SpvagAOpsHn5xKj7EE1C/hJ9oH9yf2+0mt0HuQs6pOcUHBM8DuNQimOk5nn0+as/sthGhhcN5tJNhEjXquM7O7ObUqQ52VtLwCIJNR0OeQDfg2eMKy9lbJcKTQTD58TRcAGZMjdovN57bdOuFmMPttpHqkJKknZ5gxeNLfF0/O5K7BAG5AbF3G1+F15vTL8V74ocHis6bhvTVavQbAdXpB03b3jdOs68lqO1PaJmEljKed1QA0HkgsBtmzibjhGvJVPHlfjLlNIG26zaOKdJhlannMaZ2WJ8wG+5W0wuIioKggyJJG8AXnqM3oFWu3+09fF1m1agaAywpsENEAZtbkujetpsfaYpFgMmmXCDvANpvycQRysvdhhcZquPt7LuwlTMwGZ3fY+kJ5afsrXD6AIM8+gj6LcLo8uU1SpEIRIKRKUIwJClSIBCEJsKhCEaEIQjQhCEYFrttYrJScZ6KfUdAJXEdqccXktBhjR4iNbbhw4I6YY7rhtq47u2uaLvcCJ3A5iY8gZ81y1WzeZ1W22kczriAJ8m6+61tKgajwTYTv4LJXoy22mw8P4b2zGTyA3fJGLeC+pWmws3m7T6T6KS+o1rMshoIuTy1P53pzs7sM49zmiW06bfDu8R0LrHgSegCm37V61NNpsfAYFlJorPZ3pAJIqEHxE3gB3PUBdTsPZdIEPo133JylrmOa4AwYLRfTeAnNmdn+6w7aXc+JpdL6bjNTNF3GQ4OsN53hb3ZuxgyHNY1kyanFxuWkAWBBMa6EhTqXqp99dtsBaZXEdoNmYdxzYis4Cbl72tAk2BLvoCu4I8BG9aXaGww7xuYHuaf0ZBJLW6xBi5NzB4cAFkRjlI5nAf7YPA1lJ53g1HF82HwENvJiwXLfiXhKdM0DRblYS4wCSAbXbJt5Lsds9me/pCiyh4i4HvnuM0w0BtrkvJE6m95XNfiD2fOHwjBnfULXyXPMm4IImNPst49ovf+NcJ3cOzRreOY1/PNbmk4OpFrhwhw1HDrfcoWDvTDuF7dIePSHeq2rKfD9YWP72o9VVrcJw7r8PtoEZ6OaXNDXN/fYRN+et13rHSARvCpnsnjC3EUepb9R9Qre2e+WA83f3FVK8/lx1dpKEIWuJUiVCBEiVCMIhEIQKhCEaEIQgEIQgi7QfDD0J9FWPaTGZKYGrnuPnBgT5yVaOKZ4SYtH/1VP2xwL2O7xwht8oJh3iJPw68Vlsnb0eGW9OerAHw6zc8SeJSvLKLcztdw4BYUnBje9qWJ+EbytPi8QXy47zbn/gKZNu2V9Z/YbUfiKjWSBncGidBJsrk7A7PGHw4aP1nFxPHSD6KkIg8xfz3K2Pw87SVMT3lOrlzUxTy5W5ZaBluONh6rPNjZNzpz8eW9y9rMoRCfdoomENlLIkHopx6RlxWIZ4ZWTNFBFSoPDG/S8ROuimhsALYWM7Bcx2vwbMRRfTfoWuM8CASCugqOVV/il2mqUnNw9F2XOxxqGATlcYAB3aFZZu6isdTmq72Tiu7N9DY8jud9DyW6w7spyD4ToOE7vXRcvTMea3eyK2bwn4m26jd9l2zn1viz3wnYXEFtTPMQM084+6uvYb5o0zvLQT1Ik+5VGGk4EtIsTrvHl5FXd2dxdOpSbkcDlAHSBvG5TizzThtkIQqeYIQhAqRAQUAkSpEAlCEIBCEIFaEZrSAiu3wdVz9TtMwVBhcj+8NgbRLbyb7wFyyy1Xfx+K5Tcje1HQ5n706cR9Vxn4i41lEjIf0lUWuC0NbZzjbhHqpNXtCMS51ANNNzWucDmuCIG7TVVft/EuOZjic2YgHcGNJkCNbxfkudvtdPX4/FcP8ALK6s+NFi8QatS5JE+30TbxLhw4LJtItgne3MOhkD5Jtx8Q6L0x58p+mnn/7xK2/Y3bQwmLZVdPdmWVI/YdqY3wQ13ktO8QVg4LpZuacN2XcensJUBaHNILSAQRcEG4IPBaftbtHGUmzh2syfrPk52+RaRHNVz+G/bQ4eMNXJdRJ8B1NInWOLOW7dwVyMaHtBaQWkWIuCD815devD04ZTHKZ2bisXbUfE99iM+t3eHN1D5jyXYdj8djKjZxDW93HhcXHOT0yiRzPutqNjUpnI2f4W/ZS3EMFzACber+T/ACvH5MfXHHn+/wDSNtTHMo03Varg1jBLieH1PALzl2h2qcViKlciM7paP2WizW+QA85XVfixt6pVxJw8xSpBhDR+s9zQ7M7iYMDguFau3jx+vnZ34cJsPTyUjCktePQ+SYp05I5kKaWZXy7jf0AP1W5X4vCfW9rYgBzD+02T1BF/OB7rv9h4gsNJw0e4MMcDpPHj5c1WuJs5jd4keUAj6rvOx2KFdtFg1bWaeeVjASTykgeaidOmfSxwUqIQqeMIQhAIQEIBCEIBCEIBCEIHXjwhVztzabTie9pMaXUpaHmbnQ2BggXAlWMfh9VTOPYW8jJBHC+9ebzV9T/j8JlbtKp7Uays6u5oLnDK+Dl1ILnAcbBcVtSrne47iTHQmStpjqgymD15BaBtSfUf0i63xR1/l3H2kh3HkFwA3Na3yDRP1UKqIMqe1tsx1doOSh17g8vmu8eLJhVZIkbvl/hYsALSDqNE5gXiYOht57llVw1yB5fYqp+Odm+SYNhkxZzd3EK1+xm1qzGBou0GC06AgxbhcFVOzEQ2w8WkyZEEEe30Vp/h5tCnVpuF5aRmnXxFxnouHml7d/DnjMbjXdM2o46MAPVN1QT4qh6D6AJ7uw0Erg+0/bR1B4AEkh2UWAaBAzO43MDoVz1bxU8dxxXbLCPr7UqUmDx1HUmtBIFzTYBJ0CiYvsy6jjRg6lak1xyjvC4imMzQ4SYlvDTUhPto0a9OtVr4oU8SXs7trg6HZrkvcGnK0CL7oM7grApbEw1HA0f9axlV7HDun0s1R1Q1Hl1OmwiHVM0/D8JvPFei5+s043HlXO0tl9zVqUWvbUNIwHs0cYBIHnmb1CxxAFR4PFsjrF/kt92ya84l1cYd9NtXVpNJ7m1GNHfAii9wYR4XkGCMzty1GE2TWr94+lliiw1S5zsrcrQ52UcXENcQOR0SR0mU9dtW2s5zmtJ0tPUWXa9icX/psQH2y2pv5tJALgeIJB6SuU7sPbLbO1b9j9CpmCDjxGhIHEcuKovT0GUi0nZvbIrtylzXODQQ5oLczdDLTo4GJHMdFu0eWzRUJAhGAIQhAJEsoQCEIQAQoe1dqUcLTNWvUDGC0neToABcnkFx2J/FXCZgyjSrVXOIDbNpguJgAZjNzA0TQsFrrQuE/ETZzC3vGnK8wDaQ46DzXdPbYSIIFxrfeq3/ABC2jFRtPcxjnn+I/D8j6rllN16vBlcbuK/2nUa39G0zHxHi782WvpUiXkHcb+W5FNrnU6lTXxCT5ylwNSHeYV+uov29rulxBJJ4Ae8KMGw31UotsRvzEJe40tvnyFvskZWtqNgwptKqXgR8Y3H9b/Kbx1CIPL8/VQ2Ogrp3HLfrdHq4FzEHeD8iul7BYg0sTTbMCq2o2OY8Tf7T6rn8QCQJMzoeW77KfsV+TE4ckgd3Upg/zuAP9wUZc42N6u1343F/oOZAVK7YxAq4hz5lot5NJMdJKsbtNjTSw7+LcwHUmB+eSqaqfDb9Yx5RP/L2XHxTd27ZySaRKtUkzvJn3XT9iNovFU03VssUcT/pO8fFOni6lPLTcCbMkZhOknmuWKk4IQQQfhM+mh9V6bqR5dW1YOB2PRwmGa6vi+7fUFZgaK7n0wTUoNrVGHDz4+6LmlsmSBJG7abL2ls2qyrhcM3u21KpYKbxVPetDKraYplmZwa52TNOWGucFXm1NoVq7g6tULy0ZRZrQ1pcXQ1rAGidTAudUuyNrVMLUNSmKZcA5v6Rhe3xATYEX/yLgkLNtviunQ7Z7P0cPiajKOMwrQzK11OpUq5gWtaHlxDHAkuDnRumLRbb4rF7J7qaLw2u1jPHFYzl7gvDWgXc6agE782g0r7CV3PqVHvcXOdme4ne5xlzj1J91sWmicuc92ZZJOkOsTPS91n3hUx4m6sDs3UpmsypR0IqAjgfC4GN17c4PNWBRqZmh3EKn9n4V1F4LHEOu+m9p8L2ttI1ufSCrS7PV8+HY6d15EHzhE+SfWySQlQjkQJUJEYEiVIgUpEiRzwASTAAknkNUFU/jHju8qsw4NqTM798OqaSNwDQL/vLlvw/p0aeNpVcS9radOXtJ+F1QWpidBBOb+XmmNs7SGLxVSuKndOc5xaTMEC1MZv1ZaGi9k1Wwr2hrqlH4mZ89B0ENGpdlBZPkOqW6d/WPQVHbdGoJZUa4cWuDvkqp/E+ue9D2/C9ob5gm3oVxdKoyZZXynhUpkH+ulPuAjuXPJcXtcG3JDnu0/iEqPW7XLJ0WhictJ1Lc6oCT0Fx7+yap1QH+G4P3lMA+KT5+abLeen+V0k2n29W0rGDmGhgp3D1gZHC46HX6eiiU3SBPC4UYPLXW8j9FGl2pmIEgj2+y1hU81wT8xwKjYsX67+KrD8RnzNplMZqPMEx7H7qNjZzuINxcHqRB91JwIgdT9L/AETfcOOeS2zQJJi2a0+h9lpl067tPtkYjC0qrTepJeOFRoAc0+ZnoVycfo+c28g2VhRoFhqU3WcypldfRzC5rr77g3WY0ynfmjqZ/wAKJjMeIv2uU5a8hSqFhPH3/wAKMzW48lKqOiJ1+Q3LplpzwP5414++gCj1H6z+SSm31DaE6ymBE/n/AAFK97JRdl1MTBdxtoAmsViC92Y+Q4DcFhiJzGU2ukjjllem87OYmo49xLiMtR1No3Pgk5eAIDpCuTshtRpaaYLXBoaQRvaSRMcQTBB5aqjdi4x1GvSqjSm9s/wuMO9RmVv9laLX12uZOVlKHuFhme8ODCd58J9VOU5bLvF3iAkQpcipEIQKkQhBiVzX4ibQ7nA1QJz1R3Tcuvjs4gb4bmK6VU9+K22ajsYKdNxjDBp8IBy1XDM5xHJpZ0utVjN1xtCi2p+qH86bgyoI403Wd/KPNZsb3ZIpYl1InVtVr6U8nZZYf5oUf/cZaA6jSqEElz3AlzgYgEtIiL+LW6mvxlPN3dPEVg05Q3vGtcxpMWOYzAJjNG6VPLtuVjVFV7AH0GVGtnK+gWA3uSTSlp8ws8DTBpVQGFptZxOg5kXTdbCVAXgjBvLJL3NdSEAECZa5tpIUep3tIgljWk/svzeUZzAII3b0jJZKj1yRrYjd6QsGU5IE6xPLkpW0iCZ4iQOAGk9ZPlCj4MeLyPrC6TpN/wDWjlV8QeJd6WRVAdDvX7psvBaBvB9iB9k7hxBvpr5b1Ol9mnm4PEe+h90pMtyndcdN/wBFlVZOnEx0MLOu2ATvdAHQRPyCHxIwAtJ0b81Lw9L/AKas8t+KnUM82uGX5FN0SGNF2gwdZud+5bdtGME8mJexxMW3uEfNc8rwpq8Qwf67ENInNXqgt4y9zpUfEUC1gB1gH1AM+4UnHNB2lVEkfp3/ACdPvCexFMFoIsAyn6wRp/K5VficOmlIDoO8fFzHFOYuiS8xvMeybaYcehW0wrg+oDzB/wDUhbWxrXUIMnQa+W5MtqZnTyd8ipm1D4Rzv6uJWvaQPkqnMTldVliZJB4ge1j8k3UfMcg0egATlf4Wnm78/NN1YzHLpJjpNleLll2wvf3V6/hpiJpVKZGjmvm0+NoJB9r/AGVFteRMbxB6a/RXJ2TwrgcJVpPLS+hRbUiIce7LoIOsZRfgVmROqsRCQJVzSEIQgVIhCCJjMU2lTfVf8NNrnHo0En5Lzdiq7q9V1bPFV7i8gnKczjJyu036SOStz8YNqd1g20WmHV3gH/xs8TvfIPNUhKuTat6jYVK5BitS8XGDSeecgQepBRFI6VHN5VGZv/anf2Cj0cW9ogO8P7Loc3+l0geic/1LD8VFs8WOcz2uPZPWnv8ArN2FEWqUj0qR7OAKbovyE6GQRIvE7xG9BdSP6tQfztd/xCZfH6sxzj6LZGb/AA+93hn19VhTdlIPP5Io1LQVjVbEJ1wq3c3EhzQ8kttJ0+xUiiywLtN3SZJKj06Zy5jwgJ977gKMnWMi8TB3mTyH3WNV2aqIsAYHl/mU1XHjad1lg+RB4Ov1/MpIy1tKjHnIBB423ieIst0+RgrxPd3iIu+pw6Ln21c8Br3MIv4SRI6hbmq6MDB1DAHXm+asdd+71XPOcLnaBjP/ANKp/wCep7ypm0mua6bwS2/Q1Wj5FRseyNoudxxDh7NP/JS9qYkFjrCA74jE2q14A33D/Zbe4nDposbU8fxFxtcxPSyjYauQ4dVlirEHifkB91FGsDyXSThNuqn1H5mx+z8uKZdQi7zEbt5+yzrWPWyee3M0yPEAR7WKyNvKFWqZyAAOACbYSCCNZt1WIMHmEgK7R57z2zY+DpNiPURPur3/AA9aDSpHXJhMOG8s4dnPU5RdUQx4AcIuYjleT8l6E7B4ZowOFqD4jh6YPMaieijJUro0IBRK5sCEIQEpVilQUn+NGLzYunT/AO3RnzqOM+zWqvAul/EXGd5tHEH9l+QdGNDfmCuZXTFufTJKsFkCqQylLKwSytGQCfq6DkmqR/Pkhzp32163/wAqK6S6ieHSwEaCAmMU6HT+dVhQxGXXTensVSmY3FT9dN7hMS6RI/IKWnVkTF4g8HQPmmsO+fCfL7LKuzLlO4n33+yfWb4ZUHNkENIM7j910G0KgGDcN9o/hiob+crnsCzxef1t9Ftdp1v+mAIjwmOni+sqc1YU/jabv9zMb60j+lt1B2zUkxuBcTzOd9/RbTGVj/uJIA8BYRzLmMd9QtTtakT4jvJnrmd9isncZOIgl2Zsbxp0slwrI8Z/l5lJRpyQ3iJPRO4mpA8oA4Dj1V7+M/szXfLo6D7qa517cAT7H6H1ULC0pudFlVrzMcltJTLnQSRz97LBon0n0WTXWcOh6QY+qwAVxxolekOxTC3Z+EB17il7tBXm8tkQPiJI9hHvK9SYOgGU2UxoxjWjo0AfRTkQ61ZJEKGlQiUiBUJEIP/Z"
    }

    this.estudiante3 = {
      id:3,
      nombre:"Ximena",
      ciudad:"Pereira"
    }

    this.listaEstudiantes.push(this.estudiante1);
    this.listaEstudiantes.push(this.estudiante2);
    this.listaEstudiantes.push(this.estudiante3);
  }

  onMouseClick($event){
    console.log('click on: ', $event );
  }

}
