import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Overview } from './overview/overview';
import { NewsDataComponant } from './news-data-componant/news-data-componant';
import { MutualFund } from './mutual-fund/mutual-fund';
import { CoinInfo } from './coin-info/coin-info';
import { Exchanges } from './exchanges/exchanges';
import { AboutProject } from './about-project/about-project';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'dashboard',   
        pathMatch:'full' 
    },
    {
        path:'dashboard',
        component:Dashboard
    },
    {
        path:'overview',
        data:{endpoint:'coins/map'},
        component:Overview
    },{
        path:'newsDataComponant',
        component:NewsDataComponant
    },{
        path:'mutual',
        component:MutualFund
    },
    {
        path:'coin-info/:code',
        component:CoinInfo
    },
    {
        path:'exchanges',
        component:Exchanges
    },
    {
        path:'about',
        component:AboutProject
    }
];
