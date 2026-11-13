import heroPeDaSerraImg from '@/src/assets/images/hero_pe_da_serra_1794584509782.jpg';
import trioDaCasaImg from '@/src/assets/images/food_trio_da_casa_1794585314740.jpg';
import peDaSerraPorcaoImg from '@/src/assets/images/food_pe_da_serra_1794585315178.jpg';
import torresmoMandiocaImg from '@/src/assets/images/food_torresmo_mandioca_1794585315789.jpg';
import carneSolMandiocaImg from '@/src/assets/images/food_carne_sol_mandioca_1794585315385.jpg';

import almondegaMandiocaImg from '@/src/assets/images/food_almondega_mandioca_1794585315458.jpg';
import batataFritaImg from '@/src/assets/images/food_batata_frita_1794585316570.jpg';
import bolinhoArrozImg from '@/src/assets/images/food_bolinho_arroz_1794585316321.jpg';
import discoCarneImg from '@/src/assets/images/food_disco_carne_1794585316959.jpg';
import saladaAbacaxiImg from '@/src/assets/images/food_salada_abacaxi_1794585317769.jpg';
import saladaRepolhoImg from '@/src/assets/images/food_salada_repolho_1794585317186.jpg';
import saladaJiloImg from '@/src/assets/images/food_salada_jilo_1794585317947.jpg';

import carneSerenadaImg from '@/src/assets/images/food_espeto_carne_1794585318281.jpg';
import contraFileImg from '@/src/assets/images/food_espeto_carne_1794585318281.jpg';
import contraFileFitnessImg from '@/src/assets/images/food_espeto_carne_1794585318281.jpg';
import cupimImg from '@/src/assets/images/food_espeto_carne_1794585318281.jpg';
import picanhaMontadaImg from '@/src/assets/images/food_espeto_picanha_1794585318158.jpg';
import lomboPorcoImg from '@/src/assets/images/food_espeto_carne_1794585318281.jpg';
import asinhaImg from '@/src/assets/images/food_espeto_frango_bacon_1794585318182.jpg';
import coxaSobrecoxaImg from '@/src/assets/images/food_espeto_frango_bacon_1794585318182.jpg';
import coracaoImg from '@/src/assets/images/food_espeto_carne_1794585318281.jpg';
import enroladinhoFrangoBaconImg from '@/src/assets/images/food_espeto_frango_bacon_1794585318182.jpg';
import frangoBaconImg from '@/src/assets/images/food_espeto_frango_bacon_1794585318182.jpg';
import linguicaImg from '@/src/assets/images/food_espeto_carne_1794585318281.jpg';
import kaftaImg from '@/src/assets/images/food_espeto_carne_1794585318281.jpg';
import romeuJulietaImg from '@/src/assets/images/food_espeto_queijo_1794585318815.jpg';
import queijoImg from '@/src/assets/images/food_espeto_queijo_1794585318815.jpg';

import cerveja600mlImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import antarcticaOriginal600mlImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import heineken600mlImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import heinekenLataImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import cervejaLata350mlImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import cervejaLongNeckImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import cervejaSemAlcoolImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import refrigeranteLataImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import sucoLataImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import aguaMineralImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import aguaComGasImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import bebidaIceImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import caipirinhaImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import campariDoseImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import paratudoDoseImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import preparoCozumelImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import limaoUndImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';
import baldeGeloImg from '@/src/assets/images/food_bebidas_lata_garrafa_1794585319488.jpg';

export type MenuCategoryId =
  | 'petiscos-cerveja'
  | 'petiscos'
  | 'espetos'
  | 'bebidas';

export interface MenuItem {
  id: string;
  categoryId: MenuCategoryId;
  name: string;
  detail?: string;
  price: number;
  image: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  title: string;
  shortLabel: string;
  subtitle: string;
}

export const HERO_IMAGE = heroPeDaSerraImg;

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'petiscos-cerveja',
    title: 'Petiscos para Acompanhar a Cerveja',
    shortLabel: 'Para Cerveja',
    subtitle: 'Porções clássicas para compartilhar na mesa',
  },
  {
    id: 'petiscos',
    title: 'Petiscos',
    shortLabel: 'Petiscos',
    subtitle: 'Entradas, porções individuais e saladas temperadas',
  },
  {
    id: 'espetos',
    title: 'Espetos',
    shortLabel: 'Espetos',
    subtitle: 'Assados na brasa na hora com tempero da casa',
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    shortLabel: 'Bebidas',
    subtitle: 'Cervejas trincando, drinks, doses e sem álcool',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Petiscos para Acompanhar a Cerveja (4 itens)
  {
    id: 'trio-da-casa',
    categoryId: 'petiscos-cerveja',
    name: 'Trio da Casa',
    detail: 'salada de abacaxi, jiló e repolho',
    price: 15.0,
    image: trioDaCasaImg,
  },
  {
    id: 'pe-da-serra',
    categoryId: 'petiscos-cerveja',
    name: 'Pé da Serra',
    detail: 'linguiça, almôndega, bolinho de mandioca frita e vinagrete',
    price: 30.0,
    image: peDaSerraPorcaoImg,
  },
  {
    id: 'torresmo-com-mandioca',
    categoryId: 'petiscos-cerveja',
    name: 'Torresmo com mandioca',
    price: 25.0,
    image: torresmoMandiocaImg,
  },
  {
    id: 'carne-de-sol-com-mandioca',
    categoryId: 'petiscos-cerveja',
    name: 'Carne de sol com mandioca',
    detail: '500 g',
    price: 60.0,
    image: carneSolMandiocaImg,
  },

  // Petiscos (7 itens)
  {
    id: 'almondega-com-mandioca',
    categoryId: 'petiscos',
    name: 'Almôndega com mandioca',
    detail: '180 g',
    price: 15.0,
    image: almondegaMandiocaImg,
  },
  {
    id: 'batata-frita',
    categoryId: 'petiscos',
    name: 'Batata Frita',
    detail: '400 g',
    price: 30.0,
    image: batataFritaImg,
  },
  {
    id: 'bolinho-de-arroz',
    categoryId: 'petiscos',
    name: 'Bolinho de Arroz',
    detail: 'UND',
    price: 7.0,
    image: bolinhoArrozImg,
  },
  {
    id: 'disco',
    categoryId: 'petiscos',
    name: 'Disco',
    detail: 'UND',
    price: 10.0,
    image: discoCarneImg,
  },
  {
    id: 'salada-de-abacaxi',
    categoryId: 'petiscos',
    name: 'Salada de Abacaxi',
    price: 10.0,
    image: saladaAbacaxiImg,
  },
  {
    id: 'salada-de-repolho',
    categoryId: 'petiscos',
    name: 'Salada de Repolho',
    price: 10.0,
    image: saladaRepolhoImg,
  },
  {
    id: 'salada-de-jilo',
    categoryId: 'petiscos',
    name: 'Salada de Jiló',
    price: 10.0,
    image: saladaJiloImg,
  },

  // Espetos (15 itens)
  {
    id: 'carne-serenada',
    categoryId: 'espetos',
    name: 'Carne Serenada',
    price: 12.0,
    image: carneSerenadaImg,
  },
  {
    id: 'contra-file',
    categoryId: 'espetos',
    name: 'Contra filé',
    price: 12.0,
    image: contraFileImg,
  },
  {
    id: 'contra-file-fitness',
    categoryId: 'espetos',
    name: 'Contra filé fitness',
    price: 12.0,
    image: contraFileFitnessImg,
  },
  {
    id: 'cupim',
    categoryId: 'espetos',
    name: 'Cupim',
    price: 12.0,
    image: cupimImg,
  },
  {
    id: 'picanha-montada',
    categoryId: 'espetos',
    name: 'Picanha montada',
    price: 12.0,
    image: picanhaMontadaImg,
  },
  {
    id: 'lombo-de-porco',
    categoryId: 'espetos',
    name: 'Lombo de porco',
    price: 12.0,
    image: lomboPorcoImg,
  },
  {
    id: 'asinha',
    categoryId: 'espetos',
    name: 'Asinha',
    price: 12.0,
    image: asinhaImg,
  },
  {
    id: 'coxa-e-sobrecoxa',
    categoryId: 'espetos',
    name: 'Coxa e sobrecoxa',
    price: 12.0,
    image: coxaSobrecoxaImg,
  },
  {
    id: 'coracao',
    categoryId: 'espetos',
    name: 'Coração',
    price: 12.0,
    image: coracaoImg,
  },
  {
    id: 'enroladinho-frango-com-bacon',
    categoryId: 'espetos',
    name: 'Enroladinho frango com bacon',
    price: 12.0,
    image: enroladinhoFrangoBaconImg,
  },
  {
    id: 'frango-com-bacon',
    categoryId: 'espetos',
    name: 'Frango com bacon',
    price: 12.0,
    image: frangoBaconImg,
  },
  {
    id: 'linguica',
    categoryId: 'espetos',
    name: 'Linguiça',
    price: 12.0,
    image: linguicaImg,
  },
  {
    id: 'kafta',
    categoryId: 'espetos',
    name: 'Kafta',
    price: 15.0,
    image: kaftaImg,
  },
  {
    id: 'romeu-e-julieta',
    categoryId: 'espetos',
    name: 'Romeu e Julieta',
    price: 15.0,
    image: romeuJulietaImg,
  },
  {
    id: 'queijo',
    categoryId: 'espetos',
    name: 'Queijo',
    price: 12.0,
    image: queijoImg,
  },

  // Bebidas (18 itens)
  {
    id: 'cerveja-600ml',
    categoryId: 'bebidas',
    name: 'Cerveja 600 ml',
    detail: 'Amstel, Antártica, Brahma',
    price: 13.0,
    image: cerveja600mlImg,
  },
  {
    id: 'antarctica-original-600ml',
    categoryId: 'bebidas',
    name: 'Antártica Original 600 ml',
    price: 15.0,
    image: antarcticaOriginal600mlImg,
  },
  {
    id: 'heineken-600ml',
    categoryId: 'bebidas',
    name: 'Heineken 600 ml',
    price: 17.0,
    image: heineken600mlImg,
  },
  {
    id: 'heineken-lata',
    categoryId: 'bebidas',
    name: 'Heineken Lata',
    price: 8.0,
    image: heinekenLataImg,
  },
  {
    id: 'cerveja-lata-350ml',
    categoryId: 'bebidas',
    name: 'Cerveja Lata 350 ml',
    price: 6.0,
    image: cervejaLata350mlImg,
  },
  {
    id: 'cerveja-long-neck',
    categoryId: 'bebidas',
    name: 'Cerveja Long Neck',
    price: 10.0,
    image: cervejaLongNeckImg,
  },
  {
    id: 'cerveja-sem-alcool',
    categoryId: 'bebidas',
    name: 'Cerveja s/ álcool',
    price: 10.0,
    image: cervejaSemAlcoolImg,
  },
  {
    id: 'refrigerante-lata',
    categoryId: 'bebidas',
    name: 'Refrigerante Lata',
    price: 6.0,
    image: refrigeranteLataImg,
  },
  {
    id: 'suco-lata',
    categoryId: 'bebidas',
    name: 'Suco Lata',
    price: 6.0,
    image: sucoLataImg,
  },
  {
    id: 'agua',
    categoryId: 'bebidas',
    name: 'Água',
    price: 3.5,
    image: aguaMineralImg,
  },
  {
    id: 'agua-com-gas',
    categoryId: 'bebidas',
    name: 'Água c/ gás',
    price: 5.5,
    image: aguaComGasImg,
  },
  {
    id: 'ice',
    categoryId: 'bebidas',
    name: 'Ice',
    price: 10.0,
    image: bebidaIceImg,
  },
  {
    id: 'caipirinha',
    categoryId: 'bebidas',
    name: 'Caipirinha',
    price: 20.0,
    image: caipirinhaImg,
  },
  {
    id: 'campari-dose',
    categoryId: 'bebidas',
    name: 'Campari Dose',
    price: 12.0,
    image: campariDoseImg,
  },
  {
    id: 'paratudo-dose',
    categoryId: 'bebidas',
    name: 'Paratudo Dose',
    price: 6.0,
    image: paratudoDoseImg,
  },
  {
    id: 'preparo-cozumel',
    categoryId: 'bebidas',
    name: 'Preparo Cozumel',
    price: 10.0,
    image: preparoCozumelImg,
  },
  {
    id: 'limao-und',
    categoryId: 'bebidas',
    name: 'Limão und',
    price: 1.0,
    image: limaoUndImg,
  },
  {
    id: 'balde-gelo',
    categoryId: 'bebidas',
    name: 'Balde Gelo',
    price: 5.0,
    image: baldeGeloImg,
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
