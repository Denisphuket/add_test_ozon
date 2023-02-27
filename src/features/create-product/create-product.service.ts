import {HttpException, HttpStatus, Injectable} from '@nestjs/common';



@Injectable()
export class CreateProductService {

	async createProduct(dto) {
		try {
			// const random = Math.floor(10000 + Math.random() * 9000000)
			// const product = {
			// 	"items": [
			// 		{
			// 			"depth": 250,
			// 			"dimension_unit": "mm",
			// 			"height": 145,
			// 			"name": `Windows 10 Pro / Бессрочная лицензия и помощь в активации, (${random})`,
			// 			"offer_id": `win_pro_10_${random}`,
			// 			"category_id": 24027908,
			// 			"images": [
			// 				"https://cdn1.ozone.ru/s3/multimedia-e/6555421262.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-8/6555421256.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-4/6555421288.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-d/6555421261.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-i/6555421230.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-7/6555421291.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-o/6555421236.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-o/6555421308.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-m/6555421234.jpg"
			// 			],
			// 			"primary_image": "https://cdn1.ozone.ru/s3/multimedia-z/6555421283.jpg",
			// 			"marketing_price": "389.0000",
			// 			"min_ozon_price": "",
			// 			"old_price": "17173.0000",
			// 			"premium_price": "",
			// 			"price": "7173.0000",
			// 			"recommended_price": "",
			// 			"min_price": "",
			// 			"attributes": [
			// 				{//название
			// 					"complex_id": 0,
			// 					"id": 4180,
			// 					"values": [
			// 						{
			// 							"value": `Windows 10 Pro / Бессрочная лицензия и помощь в активации, 1 шт, (${random})`
			// 						}
			// 					]
			// 				},
			// 				{//тип товара
			// 					"complex_id": 0,
			// 					"id": 8229,
			// 					"values": [
			// 						{
			// 							"id": 392638731,
			// 							"value": "Программа",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Возрастные ограничения
			// 					"complex_id": 0,
			// 					"id": 9276,
			// 					"values": [
			// 						{
			// 							"id": 28692,
			// 							"value": "0+",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Жанр ПО
			// 					"complex_id": 0,
			// 					"id": 9279,
			// 					"values": [
			// 						{
			// 							"id": 87549228,
			// 							"value": "Операционные системы//Microsoft Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Тип носителя
			// 					"complex_id": 0,
			// 					"id": 9300,
			// 					"values": [
			// 						{
			// 							"id": 970593769,
			// 							"value": "Картридж",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Издатель
			// 					"complex_id": 0,
			// 					"id": 74,
			// 					"values": [
			// 						{
			// 							"id": 5078229,
			// 							"value": "Microsoft",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 115840342,
			// 							"value": "Microsoft Corporation",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Разработчик
			// 					"complex_id": 0,
			// 					"id": 77,
			// 					"values": [
			// 						{
			// 							"id": 5078229,
			// 							"value": "Microsoft",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 115840342,
			// 							"value": "Microsoft Corporation",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Бренд
			// 					"complex_id": 0,
			// 					"id": 85,
			// 					"values": [
			// 						{
			// 							"id": 5105339,
			// 							"value": "Microsoft",
			// 							"info": " Продукт медиа",
			// 							"picture": "https://cdn1.ozone.ru/multimedia/1014181631.jpg"
			// 						},
			// 					]
			// 				},
			// 				{//Год Выпуска
			// 					"complex_id": 0,
			// 					"id": 4081,
			// 					"values": [
			// 						{
			// 							"value": "2023",
			// 						}
			// 					]
			// 				},
			// 				{//Описание
			// 					"complex_id": 0,
			// 					"id": 4191,
			// 					"values": [
			// 						{
			// 							"value": "Лицензионный Microsoft Windows 10 Pro<br/><br/>Дистрибутив системы можно скачивать с сайта Microsoft.<br/><br/>Активация без каких-либо программ.<br/><br/>Cистема активируется навсегда, без ограничения срока использования. Вам будут доступны все автоматические обновления. Если у Вас установлена редакция не Pro<br/><br/>В отличии от Home у Windows 10 Pro есть инструмент шифрования BitLocker, обновление для защиты данных и улучшения отказоустойчивости, ограниченный доступ и удалённый рабочий стол. Преимущество профессиональной версии также в том, что в ней можно получать обновления через облако и устанавливать их одновременно на несколько компьютеров в домене с центрального ПК. <br/><br/>Операционная система Windows 10 Pro предназначена для владельцев бизнеса или тех людей, которым нужна серьезная безопасность и функциональность.",
			// 						}
			// 					]
			// 				},
			// 				{//Количество носителей
			// 					"complex_id": 0,
			// 					"id": 4311,
			// 					"values": [
			// 						{
			// 							"value": "1",
			// 						}
			// 					]
			// 				},
			// 				{//Версия ОС
			// 					"complex_id": 0,
			// 					"id": 4359,
			// 					"values": [
			// 						{
			// 							"id": 82072,
			// 							"value": "Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 82073,
			// 							"value": "Windows 10",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970638224,
			// 							"value": "32-bit Win",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970638225,
			// 							"value": "64-Bit Win",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Количество устройств
			// 					"complex_id": 0,
			// 					"id": 9294,
			// 					"values": [
			// 						{
			// 							"id": 45536,
			// 							"value": "1",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Срок действия лицензии
			// 					"complex_id": 0,
			// 					"id": 9297,
			// 					"values": [
			// 						{
			// 							"id": 970789268,
			// 							"value": "Бессрочный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Тип ПО
			// 					"complex_id": 0,
			// 					"id": 9301,
			// 					"values": [
			// 						{
			// 							"id": 970670713,
			// 							"value": "Операционная система",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Упаковка
			// 					"complex_id": 0,
			// 					"id": 9303,
			// 					"values": [
			// 						{
			// 							"id": 115900262,
			// 							"value": "Картонная коробка",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Коммерческий тип
			// 					"complex_id": 0,
			// 					"id": 9461,
			// 					"values": [
			// 						{
			// 							"id": 970845752,
			// 							"value": "ПО на физических носителях",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Срок активации
			// 					"complex_id": 0,
			// 					"id": 9777,
			// 					"values": [
			// 						{
			// 							"id": 970789268,
			// 							"value": "Бессрочный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Системные требования
			// 					"complex_id": 0,
			// 					"id": 9870,
			// 					"values": [
			// 						{
			// 							"value": "Microsoft отмечает, что установка обновления доступна всем пользователям с совместимым компьютером. Для проверки совместимости опубликованы системные требования к ПК. \n\nСистемные требования Windows 10:\n\nОперативная память: минимум 2 ГБ ОЗУ для 64-разрядного и 1 ГБ ОЗУ для 32-разрядного компьютера.\nНакопитель: 20 ГБ свободного пространства для 64-разрядных и 16 ГБ свободного пространства для 32-разрядных систем.\nРазрешение экрана: минимум  800 х 600 пикселей\nГрафика: Microsoft DirectX 9 и выше с WDDM 1.0\nIntel CPU: все процессоры Intel Core i3/i5/i7/i9-10xxx вплоть до 10 поколения, Intel W-12xx/W-108xx, Intel Xeon (SP 32xx, 42xx, 52xx, 62xx и 82xx), Atom (J4xxx/J5xxx and N4xxx/N5xxx), Celeron и Pentium.\nAMD CPU: все процессоры вплоть до 7 поколения (Ax-9xxx и E-Series Ex-9xxx & FX-9xxx); AMD Athlon 2xx, AMD Ryzen 3/5/7 4xxx, AMD Opteron и AMD EPYC 7xxx.\nQualcomm CPU: Snapdragon 850 и 8cx.\nЧтобы избежать проблем с установкой, стоит отключить от ПК внешние накопители и карты памяти. Кроме того, для установки требуется много свободного пространства (см требования), но система не проверяет его наличие автоматически до начала установки. Убедиться в его наличии стоит вручную до начала установки апдейта.",
			// 						}
			// 					]
			// 				},
			// 				{//Рич контент
			// 					"complex_id": 0,
			// 					"id": 11254,
			// 					"values": [
			// 						{
			// 							"value": "{\n  \"content\": [\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size5\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Инструкция по активации windows 10 pro\",\n          \"Активируем систему стандартными средствами\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-3/6509332215.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-b/6509332223.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Чтобы активировать Windows 10 вам потребуется ключ — набор символов,\",\n              \"который находится в конверте.\",\n              \"Ключ вводится во время инсталляции системы или после установки.\",\n              \"\",\n              \"•Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"В конверте с кодом вы так же найдете QR - код  для связи со службой поддержки \",\n          \"и помощи в активации!\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-t/6509332205.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-5/6509332217.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-i/6509332230.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт \",\n              \"«Активация». \",\n              \"\",\n              \"В зависимости от типа лицензии\",\n              \"процесс пройдёт либо в автоматическом режиме, либо с введением кода\",\n              \"вручную.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 1)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-c/6509332224.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-d/6509332225.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"\",\n              \"Необходимо:\",\n              \"  — телефон\",\n              \"  — ручка\",\n              \"  — блокнот для записи продиктованного кода.\",\n              \"\",\n              \"• Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-v/6509332207.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-8/6509332220.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-h/6509332229.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт «Активация».\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В новом окне выберите пункт \",\n              \"«Активировать по телефону».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-e/6512749382.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному или платному номерам и выполните следующие действия:\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \" 3) Активировать Windows 10 нажать — 1\",\n              \" 4) Без обновления жмём — 2\",\n              \" 5) Нет ключа — 2 (хоть и странно)\",\n              \" 6) Нет кода ошибки — 2\",\n              \" 7) Находитесь сейчас за ПК и открыто окно активации —1 \",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В ходе данного процесса Вас попросят ввести «ID установки», который состоит из 9 блоков, используя мобильное устройство. \",\n              \"Далее робот будет диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой».\",\n          \"\"\n        ],\n        \"size\": \"size6\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size1\",\n        \"align\": \"left\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 2)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-1/6509332213.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-9/6509332221.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"• Нажмите кнопку «Пуск» -> Поиск -> введите в поиске «slui 4.exe»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-l/6512749389.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Выполните звонок по бесплатному \",\n              \"или платному номерам и выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-x/6509332209.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"\",\n              \"• После ввода щёлкните кнопку\",\n              \"«Активация Windows»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 3)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"\",\n              \"•Требуется запустить командную строку от имени администратора. \",\n              \"Откройте «Пуск» и разверните «Служебные — Windows». \",\n              \"\",\n              \"Щёлкните правой кнопкой мыши по пункту «Командная строка», \",\n              \"выберите «Дополнительно» \",\n              \"\",\n              \"и нажмите \",\n              \"«Запуск от имени администратора»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"roll\",\n      \"blocks\": [\n        {\n          \"imgLink\": \"\",\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-g/6509332228.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-7/6509332219.jpg\",\n            \"alt\": \"Текстовое описание изображения\",\n            \"width\": 956,\n            \"height\": 597,\n            \"widthMobile\": 956,\n            \"heightMobile\": 597\n          }\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-n/6512749391.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-e/6509332226.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному \",\n              \"или платному номерам и \",\n              \"\",\n              \"выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-a/6509332222.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    }\n  ],\n  \"version\": 0.3\n}",
			// 						}
			// 					]
			// 				},
			// 				{//Свободное место
			// 					"complex_id": 0,
			// 					"id": 11462,
			// 					"values": [
			// 						{
			// 							"value": "128"
			// 						}
			// 					]
			// 				},
			// 				{//Издание
			// 					"complex_id": 0,
			// 					"id": 11467,
			// 					"values": [
			// 						{
			// 							"id": 970831211,
			// 							"value": "Расширенное",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Языки
			// 					"complex_id": 0,
			// 					"id": 11469,
			// 					"values": [
			// 						{
			// 							"id": 970831215,
			// 							"value": "Русская версия",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970831217,
			// 							"value": "Оригинальный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970831218,
			// 							"value": "Английская версия",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Количество в заводских упаковках
			// 					"complex_id": 0,
			// 					"id": 11650,
			// 					"values": [
			// 						{
			// 							"value": "1"
			// 						}
			// 					]
			// 				},
			// 				{//Название для видео
			// 					"complex_id": 100001,
			// 					"id": 21837,
			// 					"values": [
			// 						{
			// 							"value": "Видео по установке и активации Windows"
			// 						}
			// 					]
			// 				},
			// 				{//Ссылка на видео
			// 					"complex_id": 100001,
			// 					"id": 21841,
			// 					"values": [
			// 						{
			// 							"value": "https://www.youtube.com/watch?v=85JYl7VJGDg"
			// 						}
			// 					]
			// 				},
			// 				{//ключевые слова
			// 					"complex_id": 0,
			// 					"id": 22336,
			// 					"values": [
			// 						{
			// 							"value": "Windows 10 Pro, Windows 10 Professional, виндовс 10 про, виндовс 10 профессионал, помощь, активации, лицензия, лицензионный, не ключ активации, не код активации",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 5162,
			// 					"values": [
			// 						{
			// 							"id": 29934,
			// 							"value": "Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Страна
			// 					"complex_id": 0,
			// 					"id": 4320,
			// 					"values": [
			// 						{
			// 							"id": 90295,
			// 							"value": "Россия",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 4194,
			// 					"values": [
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-z/6555421283.jpg",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 4195,
			// 					"values": [
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-e/6555421262.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-8/6555421256.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-4/6555421288.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-d/6555421261.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-i/6555421230.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-7/6555421291.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-o/6555421236.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-o/6555421308.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-m/6555421234.jpg",
			// 						},
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 4384,
			// 					"values": [
			// 						{
			// 							"value": "В комплект входит лицензионное Програмное обеспечение! По всем вопросам пишите в чат!",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9048,
			// 					"values": [
			// 						{
			// 							"value": `win_win_${random}`,
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 22074,
			// 					"values": [
			// 						{
			// 							"value": "false",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 10100,
			// 					"values": [
			// 						{
			// 							"value": "true",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 11794,
			// 					"values": [
			// 						{
			// 							"id": 970860783,
			// 							"value": "safe",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9456,
			// 					"values": [
			// 						{
			// 							"value": "10",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9790,
			// 					"values": [
			// 						{
			// 							"value": "false",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 4497,
			// 					"values": [
			// 						{
			// 							"value": "10",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9455,
			// 					"values": [
			// 						{
			// 							"value": "100",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9454,
			// 					"values": [
			// 						{
			// 							"value": "100",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 10015,
			// 					"values": [
			// 						{
			// 							"value": "false",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 100001,
			// 					"values": [
			// 						{
			// 							"id": 21837,
			// 							"value": "https://www.youtube.com/watch?v=85JYl7VJGDg"
			// 						},
			// 						{
			// 							"id": 21838,
			// 							"value": "https://cdn1.ozone.ru/s3/video/cover/01GNE7HX6PQEFP681JB35PHXYP.jpg"
			// 						},
			// 						{
			// 							"id": 21839,
			// 							"value": "https://v.ozone.ru/vod/video-8/01GNE7HX6PQEFP681JB35PHXYP/master.m3u8"
			// 						},
			// 						{
			// 							"id": 21840,
			// 							"value": "01GNE7HX6PQEFP681JB35PHXYP"
			// 						},
			// 						{
			// 							"id": 21841,
			// 							"value": "https://v.ozone.ru/vod/video-8/01GNE7HX6PQEFP681JB35PHXYP/asset_2.mp4"
			// 						}
			// 					]
			// 				},
			// 			],
			// 			"currency_code": "RUB",
			// 			"vat": "0",
			// 			"weight": 100,
			// 			"weight_unit": "g",
			// 			"width": 110
			//
			// 		},
			// 	]
			// }
			// const productNoVideo = {
			// 	"items": [
			// 		{
			// 			"depth": 250,
			// 			"dimension_unit": "mm",
			// 			"height": 145,
			// 			"name": `Windows 10 Pro / Бессрочная лицензия и помощь в активации, (${random})`,
			// 			"offer_id": `win_pro_10_${random}`,
			// 			"category_id": 24027908,
			// 			"images": [
			// 				"https://cdn1.ozone.ru/s3/multimedia-e/6555421262.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-8/6555421256.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-4/6555421288.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-d/6555421261.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-i/6555421230.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-7/6555421291.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-o/6555421236.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-o/6555421308.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-m/6555421234.jpg"
			// 			],
			// 			"primary_image": "https://cdn1.ozone.ru/s3/multimedia-z/6555421283.jpg",
			// 			"marketing_price": "389.0000",
			// 			"min_ozon_price": "",
			// 			"old_price": "17173.0000",
			// 			"premium_price": "",
			// 			"price": "7173.0000",
			// 			"recommended_price": "",
			// 			"min_price": "",
			// 			"attributes": [
			// 				{//название
			// 					"complex_id": 0,
			// 					"id": 4180,
			// 					"values": [
			// 						{
			// 							"value": `Windows 10 Pro / Бессрочная лицензия и помощь в активации, 1 шт, (${random})`
			// 						}
			// 					]
			// 				},
			// 				{//тип товара
			// 					"complex_id": 0,
			// 					"id": 8229,
			// 					"values": [
			// 						{
			// 							"id": 392638731,
			// 							"value": "Программа",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Возрастные ограничения
			// 					"complex_id": 0,
			// 					"id": 9276,
			// 					"values": [
			// 						{
			// 							"id": 28692,
			// 							"value": "0+",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Жанр ПО
			// 					"complex_id": 0,
			// 					"id": 9279,
			// 					"values": [
			// 						{
			// 							"id": 87549228,
			// 							"value": "Операционные системы//Microsoft Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Тип носителя
			// 					"complex_id": 0,
			// 					"id": 9300,
			// 					"values": [
			// 						{
			// 							"id": 970593769,
			// 							"value": "Картридж",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Издатель
			// 					"complex_id": 0,
			// 					"id": 74,
			// 					"values": [
			// 						{
			// 							"id": 5078229,
			// 							"value": "Microsoft",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 115840342,
			// 							"value": "Microsoft Corporation",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Разработчик
			// 					"complex_id": 0,
			// 					"id": 77,
			// 					"values": [
			// 						{
			// 							"id": 5078229,
			// 							"value": "Microsoft",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 115840342,
			// 							"value": "Microsoft Corporation",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Бренд
			// 					"complex_id": 0,
			// 					"id": 85,
			// 					"values": [
			// 						{
			// 							"id": 5105339,
			// 							"value": "Microsoft",
			// 							"info": " Продукт медиа",
			// 							"picture": "https://cdn1.ozone.ru/multimedia/1014181631.jpg"
			// 						},
			// 					]
			// 				},
			// 				{//Год Выпуска
			// 					"complex_id": 0,
			// 					"id": 4081,
			// 					"values": [
			// 						{
			// 							"value": "2023",
			// 						}
			// 					]
			// 				},
			// 				{//Описание
			// 					"complex_id": 0,
			// 					"id": 4191,
			// 					"values": [
			// 						{
			// 							"value": "Лицензионный Microsoft Windows 10 Pro<br/><br/>Дистрибутив системы можно скачивать с сайта Microsoft.<br/><br/>Активация без каких-либо программ.<br/><br/>Cистема активируется навсегда, без ограничения срока использования. Вам будут доступны все автоматические обновления. Если у Вас установлена редакция не Pro<br/><br/>В отличии от Home у Windows 10 Pro есть инструмент шифрования BitLocker, обновление для защиты данных и улучшения отказоустойчивости, ограниченный доступ и удалённый рабочий стол. Преимущество профессиональной версии также в том, что в ней можно получать обновления через облако и устанавливать их одновременно на несколько компьютеров в домене с центрального ПК. <br/><br/>Операционная система Windows 10 Pro предназначена для владельцев бизнеса или тех людей, которым нужна серьезная безопасность и функциональность.",
			// 						}
			// 					]
			// 				},
			// 				{//Количество носителей
			// 					"complex_id": 0,
			// 					"id": 4311,
			// 					"values": [
			// 						{
			// 							"value": "1",
			// 						}
			// 					]
			// 				},
			// 				{//Версия ОС
			// 					"complex_id": 0,
			// 					"id": 4359,
			// 					"values": [
			// 						{
			// 							"id": 82072,
			// 							"value": "Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 82073,
			// 							"value": "Windows 10",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970638224,
			// 							"value": "32-bit Win",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970638225,
			// 							"value": "64-Bit Win",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Количество устройств
			// 					"complex_id": 0,
			// 					"id": 9294,
			// 					"values": [
			// 						{
			// 							"id": 45536,
			// 							"value": "1",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Срок действия лицензии
			// 					"complex_id": 0,
			// 					"id": 9297,
			// 					"values": [
			// 						{
			// 							"id": 970789268,
			// 							"value": "Бессрочный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Тип ПО
			// 					"complex_id": 0,
			// 					"id": 9301,
			// 					"values": [
			// 						{
			// 							"id": 970670713,
			// 							"value": "Операционная система",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Упаковка
			// 					"complex_id": 0,
			// 					"id": 9303,
			// 					"values": [
			// 						{
			// 							"id": 115900262,
			// 							"value": "Картонная коробка",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Коммерческий тип
			// 					"complex_id": 0,
			// 					"id": 9461,
			// 					"values": [
			// 						{
			// 							"id": 970845752,
			// 							"value": "ПО на физических носителях",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Срок активации
			// 					"complex_id": 0,
			// 					"id": 9777,
			// 					"values": [
			// 						{
			// 							"id": 970789268,
			// 							"value": "Бессрочный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Системные требования
			// 					"complex_id": 0,
			// 					"id": 9870,
			// 					"values": [
			// 						{
			// 							"value": "Microsoft отмечает, что установка обновления доступна всем пользователям с совместимым компьютером. Для проверки совместимости опубликованы системные требования к ПК. \n\nСистемные требования Windows 10:\n\nОперативная память: минимум 2 ГБ ОЗУ для 64-разрядного и 1 ГБ ОЗУ для 32-разрядного компьютера.\nНакопитель: 20 ГБ свободного пространства для 64-разрядных и 16 ГБ свободного пространства для 32-разрядных систем.\nРазрешение экрана: минимум  800 х 600 пикселей\nГрафика: Microsoft DirectX 9 и выше с WDDM 1.0\nIntel CPU: все процессоры Intel Core i3/i5/i7/i9-10xxx вплоть до 10 поколения, Intel W-12xx/W-108xx, Intel Xeon (SP 32xx, 42xx, 52xx, 62xx и 82xx), Atom (J4xxx/J5xxx and N4xxx/N5xxx), Celeron и Pentium.\nAMD CPU: все процессоры вплоть до 7 поколения (Ax-9xxx и E-Series Ex-9xxx & FX-9xxx); AMD Athlon 2xx, AMD Ryzen 3/5/7 4xxx, AMD Opteron и AMD EPYC 7xxx.\nQualcomm CPU: Snapdragon 850 и 8cx.\nЧтобы избежать проблем с установкой, стоит отключить от ПК внешние накопители и карты памяти. Кроме того, для установки требуется много свободного пространства (см требования), но система не проверяет его наличие автоматически до начала установки. Убедиться в его наличии стоит вручную до начала установки апдейта.",
			// 						}
			// 					]
			// 				},
			// 				{//Рич контент
			// 					"complex_id": 0,
			// 					"id": 11254,
			// 					"values": [
			// 						{
			// 							"value": "{\n  \"content\": [\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size5\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Инструкция по активации windows 10 pro\",\n          \"Активируем систему стандартными средствами\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-3/6509332215.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-b/6509332223.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Чтобы активировать Windows 10 вам потребуется ключ — набор символов,\",\n              \"который находится в конверте.\",\n              \"Ключ вводится во время инсталляции системы или после установки.\",\n              \"\",\n              \"•Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"В конверте с кодом вы так же найдете QR - код  для связи со службой поддержки \",\n          \"и помощи в активации!\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-t/6509332205.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-5/6509332217.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-i/6509332230.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт \",\n              \"«Активация». \",\n              \"\",\n              \"В зависимости от типа лицензии\",\n              \"процесс пройдёт либо в автоматическом режиме, либо с введением кода\",\n              \"вручную.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 1)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-c/6509332224.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-d/6509332225.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"\",\n              \"Необходимо:\",\n              \"  — телефон\",\n              \"  — ручка\",\n              \"  — блокнот для записи продиктованного кода.\",\n              \"\",\n              \"• Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-v/6509332207.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-8/6509332220.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-h/6509332229.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт «Активация».\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В новом окне выберите пункт \",\n              \"«Активировать по телефону».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-e/6512749382.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному или платному номерам и выполните следующие действия:\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \" 3) Активировать Windows 10 нажать — 1\",\n              \" 4) Без обновления жмём — 2\",\n              \" 5) Нет ключа — 2 (хоть и странно)\",\n              \" 6) Нет кода ошибки — 2\",\n              \" 7) Находитесь сейчас за ПК и открыто окно активации —1 \",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В ходе данного процесса Вас попросят ввести «ID установки», который состоит из 9 блоков, используя мобильное устройство. \",\n              \"Далее робот будет диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой».\",\n          \"\"\n        ],\n        \"size\": \"size6\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size1\",\n        \"align\": \"left\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 2)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-1/6509332213.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-9/6509332221.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"• Нажмите кнопку «Пуск» -> Поиск -> введите в поиске «slui 4.exe»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-l/6512749389.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Выполните звонок по бесплатному \",\n              \"или платному номерам и выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-x/6509332209.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"\",\n              \"• После ввода щёлкните кнопку\",\n              \"«Активация Windows»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 3)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"\",\n              \"•Требуется запустить командную строку от имени администратора. \",\n              \"Откройте «Пуск» и разверните «Служебные — Windows». \",\n              \"\",\n              \"Щёлкните правой кнопкой мыши по пункту «Командная строка», \",\n              \"выберите «Дополнительно» \",\n              \"\",\n              \"и нажмите \",\n              \"«Запуск от имени администратора»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"roll\",\n      \"blocks\": [\n        {\n          \"imgLink\": \"\",\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-g/6509332228.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-7/6509332219.jpg\",\n            \"alt\": \"Текстовое описание изображения\",\n            \"width\": 956,\n            \"height\": 597,\n            \"widthMobile\": 956,\n            \"heightMobile\": 597\n          }\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-n/6512749391.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-e/6509332226.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному \",\n              \"или платному номерам и \",\n              \"\",\n              \"выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-a/6509332222.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    }\n  ],\n  \"version\": 0.3\n}",
			// 						}
			// 					]
			// 				},
			// 				{//Свободное место
			// 					"complex_id": 0,
			// 					"id": 11462,
			// 					"values": [
			// 						{
			// 							"value": "128"
			// 						}
			// 					]
			// 				},
			// 				{//Издание
			// 					"complex_id": 0,
			// 					"id": 11467,
			// 					"values": [
			// 						{
			// 							"id": 970831211,
			// 							"value": "Расширенное",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Языки
			// 					"complex_id": 0,
			// 					"id": 11469,
			// 					"values": [
			// 						{
			// 							"id": 970831215,
			// 							"value": "Русская версия",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970831217,
			// 							"value": "Оригинальный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970831218,
			// 							"value": "Английская версия",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Количество в заводских упаковках
			// 					"complex_id": 0,
			// 					"id": 11650,
			// 					"values": [
			// 						{
			// 							"value": "1"
			// 						}
			// 					]
			// 				},
			// 				{//ключевые слова
			// 					"complex_id": 0,
			// 					"id": 22336,
			// 					"values": [
			// 						{
			// 							"value": "Windows 10 Pro, Windows 10 Professional, виндовс 10 про, виндовс 10 профессионал, помощь, активации, лицензия, лицензионный",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 5162,
			// 					"values": [
			// 						{
			// 							"id": 29934,
			// 							"value": "Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Страна
			// 					"complex_id": 0,
			// 					"id": 4320,
			// 					"values": [
			// 						{
			// 							"id": 90295,
			// 							"value": "Россия",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 4384,
			// 					"values": [
			// 						{
			// 							"value": "В комплект входит лицензионное Програмное обеспечение! По всем вопросам пишите в чат!",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9048,
			// 					"values": [
			// 						{
			// 							"value": `win_win_${random}`,
			// 						}
			// 					]
			// 				},
			// 			],
			// 			"currency_code": "RUB",
			// 			"vat": "0",
			// 			"weight": 100,
			// 			"weight_unit": "g",
			// 			"width": 110
			//
			// 		},
			// 	]
			// }
			// const productUsb = {
			// 	"items": [
			// 		{
			// 			"depth": 250,
			// 			"dimension_unit": "mm",
			// 			"height": 145,
			// 			"name": `Windows 10 Pro / Бессрочная лицензия и помощь в активации, (${random})`,
			// 			"offer_id": `win_pro_10_${random}`,
			// 			"category_id": 24027908,
			// 			"images": [
			// 				"https://cdn1.ozone.ru/s3/multimedia-e/6555421262.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-8/6555421256.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-4/6555421288.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-d/6555421261.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-i/6555421230.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-7/6555421291.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-o/6555421236.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-o/6555421308.jpg",
			// 				"https://cdn1.ozone.ru/s3/multimedia-m/6555421234.jpg"
			// 			],
			// 			"primary_image": "https://cdn1.ozone.ru/s3/multimedia-z/6555421283.jpg",
			// 			"marketing_price": "389.0000",
			// 			"min_ozon_price": "",
			// 			"old_price": "17173.0000",
			// 			"premium_price": "",
			// 			"price": "7173.0000",
			// 			"recommended_price": "",
			// 			"min_price": "",
			// 			"attributes": [
			// 				{//название
			// 					"complex_id": 0,
			// 					"id": 4180,
			// 					"values": [
			// 						{
			// 							"value": `Windows 10 Pro / Бессрочная лицензия и помощь в активации, 1 шт, (${random})`
			// 						}
			// 					]
			// 				},
			// 				{//тип товара
			// 					"complex_id": 0,
			// 					"id": 8229,
			// 					"values": [
			// 						{
			// 							"id": 392638731,
			// 							"value": "Программа",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Возрастные ограничения
			// 					"complex_id": 0,
			// 					"id": 9276,
			// 					"values": [
			// 						{
			// 							"id": 28692,
			// 							"value": "0+",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Жанр ПО
			// 					"complex_id": 0,
			// 					"id": 9279,
			// 					"values": [
			// 						{
			// 							"id": 87549228,
			// 							"value": "Операционные системы//Microsoft Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Тип носителя
			// 					"complex_id": 0,
			// 					"id": 9300,
			// 					"values": [
			// 						{
			// 							"id": 970593759,
			// 							"value": "USB-накопитель",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Издатель
			// 					"complex_id": 0,
			// 					"id": 74,
			// 					"values": [
			// 						{
			// 							"id": 5078229,
			// 							"value": "Microsoft",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 115840342,
			// 							"value": "Microsoft Corporation",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Разработчик
			// 					"complex_id": 0,
			// 					"id": 77,
			// 					"values": [
			// 						{
			// 							"id": 5078229,
			// 							"value": "Microsoft",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 115840342,
			// 							"value": "Microsoft Corporation",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Бренд
			// 					"complex_id": 0,
			// 					"id": 85,
			// 					"values": [
			// 						{
			// 							"id": 5105339,
			// 							"value": "Microsoft",
			// 							"info": " Продукт медиа",
			// 							"picture": "https://cdn1.ozone.ru/multimedia/1014181631.jpg"
			// 						},
			// 					]
			// 				},
			// 				{//Год Выпуска
			// 					"complex_id": 0,
			// 					"id": 4081,
			// 					"values": [
			// 						{
			// 							"value": "2023",
			// 						}
			// 					]
			// 				},
			// 				{//Описание
			// 					"complex_id": 0,
			// 					"id": 4191,
			// 					"values": [
			// 						{
			// 							"value": "Лицензионный Microsoft Windows 10 Pro<br/><br/>Дистрибутив системы можно скачивать с сайта Microsoft.<br/><br/>Активация без каких-либо программ.<br/><br/>Cистема активируется навсегда, без ограничения срока использования. Вам будут доступны все автоматические обновления. Если у Вас установлена редакция не Pro<br/><br/>В отличии от Home у Windows 10 Pro есть инструмент шифрования BitLocker, обновление для защиты данных и улучшения отказоустойчивости, ограниченный доступ и удалённый рабочий стол. Преимущество профессиональной версии также в том, что в ней можно получать обновления через облако и устанавливать их одновременно на несколько компьютеров в домене с центрального ПК. <br/><br/>Операционная система Windows 10 Pro предназначена для владельцев бизнеса или тех людей, которым нужна серьезная безопасность и функциональность.",
			// 						}
			// 					]
			// 				},
			// 				{//Количество носителей
			// 					"complex_id": 0,
			// 					"id": 4311,
			// 					"values": [
			// 						{
			// 							"value": "1",
			// 						}
			// 					]
			// 				},
			// 				{//Версия ОС
			// 					"complex_id": 0,
			// 					"id": 4359,
			// 					"values": [
			// 						{
			// 							"id": 82072,
			// 							"value": "Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 82073,
			// 							"value": "Windows 10",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970638224,
			// 							"value": "32-bit Win",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970638225,
			// 							"value": "64-Bit Win",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Количество устройств
			// 					"complex_id": 0,
			// 					"id": 9294,
			// 					"values": [
			// 						{
			// 							"id": 45536,
			// 							"value": "1",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Срок действия лицензии
			// 					"complex_id": 0,
			// 					"id": 9297,
			// 					"values": [
			// 						{
			// 							"id": 970789268,
			// 							"value": "Бессрочный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Тип ПО
			// 					"complex_id": 0,
			// 					"id": 9301,
			// 					"values": [
			// 						{
			// 							"id": 970670713,
			// 							"value": "Операционная система",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Упаковка
			// 					"complex_id": 0,
			// 					"id": 9303,
			// 					"values": [
			// 						{
			// 							"id": 115900262,
			// 							"value": "Картонная коробка",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Коммерческий тип
			// 					"complex_id": 0,
			// 					"id": 9461,
			// 					"values": [
			// 						{
			// 							"id": 970845752,
			// 							"value": "ПО на физических носителях",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Срок активации
			// 					"complex_id": 0,
			// 					"id": 9777,
			// 					"values": [
			// 						{
			// 							"id": 970789268,
			// 							"value": "Бессрочный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Системные требования
			// 					"complex_id": 0,
			// 					"id": 9870,
			// 					"values": [
			// 						{
			// 							"value": "Microsoft отмечает, что установка обновления доступна всем пользователям с совместимым компьютером. Для проверки совместимости опубликованы системные требования к ПК. \n\nСистемные требования Windows 10:\n\nОперативная память: минимум 2 ГБ ОЗУ для 64-разрядного и 1 ГБ ОЗУ для 32-разрядного компьютера.\nНакопитель: 20 ГБ свободного пространства для 64-разрядных и 16 ГБ свободного пространства для 32-разрядных систем.\nРазрешение экрана: минимум  800 х 600 пикселей\nГрафика: Microsoft DirectX 9 и выше с WDDM 1.0\nIntel CPU: все процессоры Intel Core i3/i5/i7/i9-10xxx вплоть до 10 поколения, Intel W-12xx/W-108xx, Intel Xeon (SP 32xx, 42xx, 52xx, 62xx и 82xx), Atom (J4xxx/J5xxx and N4xxx/N5xxx), Celeron и Pentium.\nAMD CPU: все процессоры вплоть до 7 поколения (Ax-9xxx и E-Series Ex-9xxx & FX-9xxx); AMD Athlon 2xx, AMD Ryzen 3/5/7 4xxx, AMD Opteron и AMD EPYC 7xxx.\nQualcomm CPU: Snapdragon 850 и 8cx.\nЧтобы избежать проблем с установкой, стоит отключить от ПК внешние накопители и карты памяти. Кроме того, для установки требуется много свободного пространства (см требования), но система не проверяет его наличие автоматически до начала установки. Убедиться в его наличии стоит вручную до начала установки апдейта.",
			// 						}
			// 					]
			// 				},
			// 				{//Рич контент
			// 					"complex_id": 0,
			// 					"id": 11254,
			// 					"values": [
			// 						{
			// 							"value": "{\n  \"content\": [\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size5\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Инструкция по активации windows 10 pro\",\n          \"Активируем систему стандартными средствами\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-3/6509332215.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-b/6509332223.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Чтобы активировать Windows 10 вам потребуется ключ — набор символов,\",\n              \"который находится в конверте.\",\n              \"Ключ вводится во время инсталляции системы или после установки.\",\n              \"\",\n              \"•Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"В конверте с кодом вы так же найдете QR - код  для связи со службой поддержки \",\n          \"и помощи в активации!\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-t/6509332205.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-5/6509332217.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-i/6509332230.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт \",\n              \"«Активация». \",\n              \"\",\n              \"В зависимости от типа лицензии\",\n              \"процесс пройдёт либо в автоматическом режиме, либо с введением кода\",\n              \"вручную.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 1)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-c/6509332224.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-d/6509332225.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"\",\n              \"Необходимо:\",\n              \"  — телефон\",\n              \"  — ручка\",\n              \"  — блокнот для записи продиктованного кода.\",\n              \"\",\n              \"• Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-v/6509332207.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-8/6509332220.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-h/6509332229.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт «Активация».\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В новом окне выберите пункт \",\n              \"«Активировать по телефону».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-e/6512749382.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному или платному номерам и выполните следующие действия:\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \" 3) Активировать Windows 10 нажать — 1\",\n              \" 4) Без обновления жмём — 2\",\n              \" 5) Нет ключа — 2 (хоть и странно)\",\n              \" 6) Нет кода ошибки — 2\",\n              \" 7) Находитесь сейчас за ПК и открыто окно активации —1 \",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В ходе данного процесса Вас попросят ввести «ID установки», который состоит из 9 блоков, используя мобильное устройство. \",\n              \"Далее робот будет диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой».\",\n          \"\"\n        ],\n        \"size\": \"size6\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size1\",\n        \"align\": \"left\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 2)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-1/6509332213.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-9/6509332221.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"• Нажмите кнопку «Пуск» -> Поиск -> введите в поиске «slui 4.exe»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-l/6512749389.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Выполните звонок по бесплатному \",\n              \"или платному номерам и выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-x/6509332209.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"\",\n              \"• После ввода щёлкните кнопку\",\n              \"«Активация Windows»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 3)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"\",\n              \"•Требуется запустить командную строку от имени администратора. \",\n              \"Откройте «Пуск» и разверните «Служебные — Windows». \",\n              \"\",\n              \"Щёлкните правой кнопкой мыши по пункту «Командная строка», \",\n              \"выберите «Дополнительно» \",\n              \"\",\n              \"и нажмите \",\n              \"«Запуск от имени администратора»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"roll\",\n      \"blocks\": [\n        {\n          \"imgLink\": \"\",\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-g/6509332228.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-7/6509332219.jpg\",\n            \"alt\": \"Текстовое описание изображения\",\n            \"width\": 956,\n            \"height\": 597,\n            \"widthMobile\": 956,\n            \"heightMobile\": 597\n          }\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-n/6512749391.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-e/6509332226.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному \",\n              \"или платному номерам и \",\n              \"\",\n              \"выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-a/6509332222.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    }\n  ],\n  \"version\": 0.3\n}",
			// 						}
			// 					]
			// 				},
			// 				{//Свободное место
			// 					"complex_id": 0,
			// 					"id": 11462,
			// 					"values": [
			// 						{
			// 							"value": "128"
			// 						}
			// 					]
			// 				},
			// 				{//Издание
			// 					"complex_id": 0,
			// 					"id": 11467,
			// 					"values": [
			// 						{
			// 							"id": 970831211,
			// 							"value": "Расширенное",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Языки
			// 					"complex_id": 0,
			// 					"id": 11469,
			// 					"values": [
			// 						{
			// 							"id": 970831215,
			// 							"value": "Русская версия",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970831217,
			// 							"value": "Оригинальный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970831218,
			// 							"value": "Английская версия",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Количество в заводских упаковках
			// 					"complex_id": 0,
			// 					"id": 11650,
			// 					"values": [
			// 						{
			// 							"value": "1"
			// 						}
			// 					]
			// 				},
			// 				{//Название для видео
			// 					"complex_id": 100001,
			// 					"id": 21837,
			// 					"values": [
			// 						{
			// 							"value": "Видео по установке и активации Windows"
			// 						}
			// 					]
			// 				},
			// 				{//Ссылка на видео
			// 					"complex_id": 100001,
			// 					"id": 21841,
			// 					"values": [
			// 						{
			// 							"value": "https://www.youtube.com/watch?v=85JYl7VJGDg"
			// 						}
			// 					]
			// 				},
			// 				{//ключевые слова
			// 					"complex_id": 0,
			// 					"id": 22336,
			// 					"values": [
			// 						{
			// 							"value": "Windows 10 Pro, Windows 10 Professional, виндовс 10 про, виндовс 10 профессионал, помощь, активации, лицензия, лицензионный, не ключ активации, не код активации",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 5162,
			// 					"values": [
			// 						{
			// 							"id": 29934,
			// 							"value": "Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Страна
			// 					"complex_id": 0,
			// 					"id": 4320,
			// 					"values": [
			// 						{
			// 							"id": 90295,
			// 							"value": "Россия",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 4194,
			// 					"values": [
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-z/6555421283.jpg",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 4195,
			// 					"values": [
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-e/6555421262.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-8/6555421256.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-4/6555421288.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-d/6555421261.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-i/6555421230.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-7/6555421291.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-o/6555421236.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-o/6555421308.jpg",
			// 						},
			// 						{
			// 							"value": "https://cdn1.ozone.ru/s3/multimedia-m/6555421234.jpg",
			// 						},
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 4384,
			// 					"values": [
			// 						{
			// 							"value": "В комплект входит лицензионное Програмное обеспечение! По всем вопросам пишите в чат!",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9048,
			// 					"values": [
			// 						{
			// 							"value": `win_win_${random}`,
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 22074,
			// 					"values": [
			// 						{
			// 							"value": "false",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 10100,
			// 					"values": [
			// 						{
			// 							"value": "true",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 11794,
			// 					"values": [
			// 						{
			// 							"id": 970860783,
			// 							"value": "safe",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9456,
			// 					"values": [
			// 						{
			// 							"value": "10",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9790,
			// 					"values": [
			// 						{
			// 							"value": "false",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 4497,
			// 					"values": [
			// 						{
			// 							"value": "10",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9455,
			// 					"values": [
			// 						{
			// 							"value": "100",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9454,
			// 					"values": [
			// 						{
			// 							"value": "100",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 10015,
			// 					"values": [
			// 						{
			// 							"value": "false",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 100001,
			// 					"values": [
			// 						{
			// 							"id": 21837,
			// 							"value": "https://www.youtube.com/watch?v=85JYl7VJGDg"
			// 						},
			// 						{
			// 							"id": 21838,
			// 							"value": "https://cdn1.ozone.ru/s3/video/cover/01GNE7HX6PQEFP681JB35PHXYP.jpg"
			// 						},
			// 						{
			// 							"id": 21839,
			// 							"value": "https://v.ozone.ru/vod/video-8/01GNE7HX6PQEFP681JB35PHXYP/master.m3u8"
			// 						},
			// 						{
			// 							"id": 21840,
			// 							"value": "01GNE7HX6PQEFP681JB35PHXYP"
			// 						},
			// 						{
			// 							"id": 21841,
			// 							"value": "https://v.ozone.ru/vod/video-8/01GNE7HX6PQEFP681JB35PHXYP/asset_2.mp4"
			// 						}
			// 					]
			// 				},
			// 			],
			// 			"currency_code": "RUB",
			// 			"vat": "0",
			// 			"weight": 100,
			// 			"weight_unit": "g",
			// 			"width": 110
			//
			// 		},
			// 	]
			// }
			//
			// const productMin = {
			// 	"items": [
			// 		{
			// 			"name": `Windows 10 Pro / Бессрочная лицензия и помощь в активации, (${random})`,
			// 			"offer_id": `win_pro_10_${random}`,
			// 			"category_id": 24027908,
			// 			"images": [
			// 				"https://cdn1.ozone.ru/s3/multimedia-x/6501416565.jpg",
			// 			],
			// 			"primary_image": "https://cdn1.ozone.ru/s3/multimedia-x/6501416565.jpg",
			// 			"marketing_price": "3089.0000",
			// 			"min_ozon_price": "",
			// 			"old_price": "17173.0000",
			// 			"premium_price": "",
			// 			"price": "7173.0000",
			// 			"recommended_price": "",
			// 			"min_price": "",
			// 			"currency_code": "RUB",
			// 			"vat": "0",
			// 			"weight": 30,
			// 			"weight_unit": "g",
			// 			"depth": 100,
			// 			"dimension_unit": "mm",
			// 			"width": 50,
			// 			"height": 100,
			// 			"attributes": [
			// 				{//название
			// 					"complex_id": 0,
			// 					"id": 4180,
			// 					"values": [
			// 						{
			// 							"value": `Windows 10 Pro / Бессрочная лицензия и помощь в активации, 1 шт, (${random})`
			// 						}
			// 					]
			// 				},
			// 				{//тип товара
			// 					"complex_id": 0,
			// 					"id": 8229,
			// 					"values": [
			// 						{
			// 							"id": 392638731,
			// 							"value": "Программа",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Возрастные ограничения
			// 					"complex_id": 0,
			// 					"id": 9276,
			// 					"values": [
			// 						{
			// 							"id": 28692,
			// 							"value": "0+",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Жанр ПО
			// 					"complex_id": 0,
			// 					"id": 9279,
			// 					"values": [
			// 						{
			// 							"id": 87549228,
			// 							"value": "Операционные системы//Microsoft Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Тип носителя
			// 					"complex_id": 0,
			// 					"id": 9300,
			// 					"values": [
			// 						{
			// 							"id": 970593769,
			// 							"value": "Картридж",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Издатель
			// 					"complex_id": 0,
			// 					"id": 74,
			// 					"values": [
			// 						{
			// 							"id": 5078229,
			// 							"value": "Microsoft",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 115840342,
			// 							"value": "Microsoft Corporation",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Разработчик
			// 					"complex_id": 0,
			// 					"id": 77,
			// 					"values": [
			// 						{
			// 							"id": 5078229,
			// 							"value": "Microsoft",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 115840342,
			// 							"value": "Microsoft Corporation",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Бренд
			// 					"complex_id": 0,
			// 					"id": 85,
			// 					"values": [
			// 						{
			// 							"id": 5105339,
			// 							"value": "Microsoft",
			// 							"info": " Продукт медиа",
			// 							"picture": "https://cdn1.ozone.ru/multimedia/1014181631.jpg"
			// 						},
			// 					]
			// 				},
			// 				{//Год Выпуска
			// 					"complex_id": 0,
			// 					"id": 4081,
			// 					"values": [
			// 						{
			// 							"value": "2023",
			// 						}
			// 					]
			// 				},
			// 				{//Описание
			// 					"complex_id": 0,
			// 					"id": 4191,
			// 					"values": [
			// 						{
			// 							"value": "Лицензионный Microsoft Windows 10 Pro<br/><br/>Дистрибутив системы можно скачивать с сайта Microsoft.<br/><br/>Активация без каких-либо программ.<br/><br/>Cистема активируется навсегда, без ограничения срока использования. Вам будут доступны все автоматические обновления. Если у Вас установлена редакция не Pro<br/><br/>В отличии от Home у Windows 10 Pro есть инструмент шифрования BitLocker, обновление для защиты данных и улучшения отказоустойчивости, ограниченный доступ и удалённый рабочий стол. Преимущество профессиональной версии также в том, что в ней можно получать обновления через облако и устанавливать их одновременно на несколько компьютеров в домене с центрального ПК. <br/><br/>Операционная система Windows 10 Pro предназначена для владельцев бизнеса или тех людей, которым нужна серьезная безопасность и функциональность.",
			// 						}
			// 					]
			// 				},
			// 				{//Количество носителей
			// 					"complex_id": 0,
			// 					"id": 4311,
			// 					"values": [
			// 						{
			// 							"value": "1",
			// 						}
			// 					]
			// 				},
			// 				{//Версия ОС
			// 					"complex_id": 0,
			// 					"id": 4359,
			// 					"values": [
			// 						{
			// 							"id": 82072,
			// 							"value": "Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 82073,
			// 							"value": "Windows 10",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970638224,
			// 							"value": "32-bit Win",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970638225,
			// 							"value": "64-Bit Win",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Количество устройств
			// 					"complex_id": 0,
			// 					"id": 9294,
			// 					"values": [
			// 						{
			// 							"id": 45536,
			// 							"value": "1",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Срок действия лицензии
			// 					"complex_id": 0,
			// 					"id": 9297,
			// 					"values": [
			// 						{
			// 							"id": 970789268,
			// 							"value": "Бессрочный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Тип ПО
			// 					"complex_id": 0,
			// 					"id": 9301,
			// 					"values": [
			// 						{
			// 							"id": 970670713,
			// 							"value": "Операционная система",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Упаковка
			// 					"complex_id": 0,
			// 					"id": 9303,
			// 					"values": [
			// 						{
			// 							"id": 115900262,
			// 							"value": "Картонная коробка",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Коммерческий тип
			// 					"complex_id": 0,
			// 					"id": 9461,
			// 					"values": [
			// 						{
			// 							"id": 970845752,
			// 							"value": "ПО на физических носителях",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Срок активации
			// 					"complex_id": 0,
			// 					"id": 9777,
			// 					"values": [
			// 						{
			// 							"id": 970789268,
			// 							"value": "Бессрочный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Системные требования
			// 					"complex_id": 0,
			// 					"id": 9870,
			// 					"values": [
			// 						{
			// 							"value": "Microsoft отмечает, что установка обновления доступна всем пользователям с совместимым компьютером. Для проверки совместимости опубликованы системные требования к ПК. \n\nСистемные требования Windows 10:\n\nОперативная память: минимум 2 ГБ ОЗУ для 64-разрядного и 1 ГБ ОЗУ для 32-разрядного компьютера.\nНакопитель: 20 ГБ свободного пространства для 64-разрядных и 16 ГБ свободного пространства для 32-разрядных систем.\nРазрешение экрана: минимум  800 х 600 пикселей\nГрафика: Microsoft DirectX 9 и выше с WDDM 1.0\nIntel CPU: все процессоры Intel Core i3/i5/i7/i9-10xxx вплоть до 10 поколения, Intel W-12xx/W-108xx, Intel Xeon (SP 32xx, 42xx, 52xx, 62xx и 82xx), Atom (J4xxx/J5xxx and N4xxx/N5xxx), Celeron и Pentium.\nAMD CPU: все процессоры вплоть до 7 поколения (Ax-9xxx и E-Series Ex-9xxx & FX-9xxx); AMD Athlon 2xx, AMD Ryzen 3/5/7 4xxx, AMD Opteron и AMD EPYC 7xxx.\nQualcomm CPU: Snapdragon 850 и 8cx.\nЧтобы избежать проблем с установкой, стоит отключить от ПК внешние накопители и карты памяти. Кроме того, для установки требуется много свободного пространства (см требования), но система не проверяет его наличие автоматически до начала установки. Убедиться в его наличии стоит вручную до начала установки апдейта.",
			// 						}
			// 					]
			// 				},
			// 				{//Рич контент
			// 					"complex_id": 0,
			// 					"id": 11254,
			// 					"values": [
			// 						{
			// 							"value": "{\n  \"content\": [\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size5\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Инструкция по активации windows 10 pro\",\n          \"Активируем систему стандартными средствами\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-3/6509332215.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-b/6509332223.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Чтобы активировать Windows 10 вам потребуется ключ — набор символов,\",\n              \"который находится в конверте.\",\n              \"Ключ вводится во время инсталляции системы или после установки.\",\n              \"\",\n              \"•Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"В конверте с кодом вы так же найдете QR - код  для связи со службой поддержки \",\n          \"и помощи в активации!\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-t/6509332205.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-5/6509332217.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-i/6509332230.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт \",\n              \"«Активация». \",\n              \"\",\n              \"В зависимости от типа лицензии\",\n              \"процесс пройдёт либо в автоматическом режиме, либо с введением кода\",\n              \"вручную.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 1)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-c/6509332224.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-d/6509332225.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"\",\n              \"Необходимо:\",\n              \"  — телефон\",\n              \"  — ручка\",\n              \"  — блокнот для записи продиктованного кода.\",\n              \"\",\n              \"• Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-v/6509332207.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-8/6509332220.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-h/6509332229.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт «Активация».\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В новом окне выберите пункт \",\n              \"«Активировать по телефону».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-e/6512749382.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному или платному номерам и выполните следующие действия:\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \" 3) Активировать Windows 10 нажать — 1\",\n              \" 4) Без обновления жмём — 2\",\n              \" 5) Нет ключа — 2 (хоть и странно)\",\n              \" 6) Нет кода ошибки — 2\",\n              \" 7) Находитесь сейчас за ПК и открыто окно активации —1 \",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В ходе данного процесса Вас попросят ввести «ID установки», который состоит из 9 блоков, используя мобильное устройство. \",\n              \"Далее робот будет диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой».\",\n          \"\"\n        ],\n        \"size\": \"size6\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size1\",\n        \"align\": \"left\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 2)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-1/6509332213.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-9/6509332221.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"• Нажмите кнопку «Пуск» -> Поиск -> введите в поиске «slui 4.exe»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-l/6512749389.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Выполните звонок по бесплатному \",\n              \"или платному номерам и выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-x/6509332209.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"\",\n              \"• После ввода щёлкните кнопку\",\n              \"«Активация Windows»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 3)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"\",\n              \"•Требуется запустить командную строку от имени администратора. \",\n              \"Откройте «Пуск» и разверните «Служебные — Windows». \",\n              \"\",\n              \"Щёлкните правой кнопкой мыши по пункту «Командная строка», \",\n              \"выберите «Дополнительно» \",\n              \"\",\n              \"и нажмите \",\n              \"«Запуск от имени администратора»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"roll\",\n      \"blocks\": [\n        {\n          \"imgLink\": \"\",\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-g/6509332228.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-7/6509332219.jpg\",\n            \"alt\": \"Текстовое описание изображения\",\n            \"width\": 956,\n            \"height\": 597,\n            \"widthMobile\": 956,\n            \"heightMobile\": 597\n          }\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-n/6512749391.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-e/6509332226.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному \",\n              \"или платному номерам и \",\n              \"\",\n              \"выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-a/6509332222.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    }\n  ],\n  \"version\": 0.3\n}",
			// 						}
			// 					]
			// 				},
			// 				{//Свободное место
			// 					"complex_id": 0,
			// 					"id": 11462,
			// 					"values": [
			// 						{
			// 							"value": "128"
			// 						}
			// 					]
			// 				},
			// 				{//Издание
			// 					"complex_id": 0,
			// 					"id": 11467,
			// 					"values": [
			// 						{
			// 							"id": 970831211,
			// 							"value": "Расширенное",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Языки
			// 					"complex_id": 0,
			// 					"id": 11469,
			// 					"values": [
			// 						{
			// 							"id": 970831215,
			// 							"value": "Русская версия",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970831217,
			// 							"value": "Оригинальный",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 						{
			// 							"id": 970831218,
			// 							"value": "Английская версия",
			// 							"info": "",
			// 							"picture": ""
			// 						}
			// 					]
			// 				},
			// 				{//Количество в заводских упаковках
			// 					"complex_id": 0,
			// 					"id": 11650,
			// 					"values": [
			// 						{
			// 							"value": "1"
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 5162,
			// 					"values": [
			// 						{
			// 							"id": 29934,
			// 							"value": "Windows",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{//Страна
			// 					"complex_id": 0,
			// 					"id": 4320,
			// 					"values": [
			// 						{
			// 							"id": 90295,
			// 							"value": "Россия",
			// 							"info": "",
			// 							"picture": ""
			// 						},
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 4384,
			// 					"values": [
			// 						{
			// 							"value": "В комплект входит лицензионное Програмное обеспечение! По всем вопросам пишите в чат!",
			// 						}
			// 					]
			// 				},
			// 				{
			// 					"complex_id": 0,
			// 					"id": 9048,
			// 					"values": [
			// 						{
			// 							"value": `win_win_${random}`,
			// 						}
			// 					]
			// 				},
			// 				{//ключевые слова
			// 					"complex_id": 0,
			// 					"id": 22336,
			// 					"values": [
			// 						{
			// 							"value": "Windows 10 Pro, Windows 10 Professional, виндовс 10 про, виндовс 10 профессионал, помощь, активации, лицензия, лицензионный",
			// 						}
			// 					]
			// 				},
			// 			],
			//
			// 		},
			// 	]
			// }
			// const productOffice = {
			// 	"name": `Office 365 для MacOS - макбук MacBook Windows / Бессрочно, (${random})`,
			// 	"offer_id": `Office365_${random}`,
			// 	"category_id": 24027908,
			// 	"images": [
			// 		"https://cdn1.ozone.ru/s3/multimedia-7/6541651543.jpg",
			// 		"https://cdn1.ozone.ru/s3/multimedia-3/6541651539.jpg",
			// 		"https://cdn1.ozone.ru/s3/multimedia-4/6541651540.jpg",
			// 		"https://cdn1.ozone.ru/s3/multimedia-2/6541651538.jpg",
			// 		"https://cdn1.ozone.ru/s3/multimedia-5/6541651541.jpg",
			// 		"https://cdn1.ozone.ru/s3/multimedia-8/6541651544.jpg",
			// 		"https://cdn1.ozone.ru/s3/multimedia-1/6541651537.jpg",
			// 		"https://cdn1.ozone.ru/s3/multimedia-6/6541651542.jpg"
			// 	],
			// 	"primary_image": "https://cdn1.ozone.ru/s3/multimedia-0/6541651536.jpg",
			// 	"marketing_price": "5460.0000",
			// 	"min_ozon_price": "",
			// 	"old_price": "17173.0000",
			// 	"premium_price": "",
			// 	"price": "7173.0000",
			// 	"recommended_price": "",
			// 	"min_price": "",
			// 	"currency_code": "RUB",
			// 	"vat": "0",
			// 	"weight": 150,
			// 	"weight_unit": "g",
			// 	"depth": 40,
			// 	"dimension_unit": "mm",
			// 	"width": 100,
			// 	"height": 100,
			// 	"attributes": [
			// 		{//название
			// 			"complex_id": 0,
			// 			"id": 4180,
			// 			"values": [
			// 				{
			// 					"value": `Office 365 для MacOS - макбук MacBook Windows / Бессрочно, (${random})`
			// 				}
			// 			]
			// 		},
			// 		{//тип товара
			// 			"complex_id": 0,
			// 			"id": 8229,
			// 			"values": [
			// 				{
			// 					"id": 392638731,
			// 					"value": "Программа",
			// 					"info": "",
			// 					"picture": ""
			// 				}
			// 			]
			// 		},
			// 		{//Возрастные ограничения
			// 			"complex_id": 0,
			// 			"id": 9276,
			// 			"values": [
			// 				{
			// 					"id": 28692,
			// 					"value": "0+",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Жанр ПО
			// 			"complex_id": 0,
			// 			"id": 9279,
			// 			"values": [
			// 				{
			// 					"id": 87549228,
			// 					"value": "Операционные системы//Microsoft Windows",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Тип носителя
			// 			"complex_id": 0,
			// 			"id": 9300,
			// 			"values": [
			// 				{
			// 					"id": 970593769,
			// 					"value": "Картридж",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Издатель
			// 			"complex_id": 0,
			// 			"id": 74,
			// 			"values": [
			// 				{
			// 					"id": 5078229,
			// 					"value": "Microsoft",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 				{
			// 					"id": 115840342,
			// 					"value": "Microsoft Corporation",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Разработчик
			// 			"complex_id": 0,
			// 			"id": 77,
			// 			"values": [
			// 				{
			// 					"id": 5078229,
			// 					"value": "Microsoft",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 				{
			// 					"id": 115840342,
			// 					"value": "Microsoft Corporation",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Бренд
			// 			"complex_id": 0,
			// 			"id": 85,
			// 			"values": [
			// 				{
			// 					"id": 5105339,
			// 					"value": "Microsoft",
			// 					"info": " Продукт медиа",
			// 					"picture": "https://cdn1.ozone.ru/multimedia/1014181631.jpg"
			// 				},
			// 			]
			// 		},
			// 		{//Год Выпуска
			// 			"complex_id": 0,
			// 			"id": 4081,
			// 			"values": [
			// 				{
			// 					"value": "2023",
			// 				}
			// 			]
			// 		},
			// 		{//Описание
			// 			"complex_id": 0,
			// 			"id": 4191,
			// 			"values": [
			// 				{
			// 					"value": "Обратите Внимание! В комплекте поставки ЛОГИН и ПАРОЛЬ для доступа ко всем функциям Microsoft Office 365",
			// 				}
			// 			]
			// 		},
			// 		{//Количество носителей
			// 			"complex_id": 0,
			// 			"id": 4311,
			// 			"values": [
			// 				{
			// 					"value": "1",
			// 				}
			// 			]
			// 		},
			// 		{//Версия ОС
			// 			"complex_id": 0,
			// 			"id": 4359,
			// 			"values": [
			// 				{
			// 					"id": 82072,
			// 					"value": "Windows",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 				{
			// 					"id": 82073,
			// 					"value": "Windows 10",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 				{
			// 					"id": 970638224,
			// 					"value": "32-bit Win",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 				{
			// 					"id": 970638225,
			// 					"value": "64-Bit Win",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 				{
			// 					"id": 82042,
			// 					"value": "macOS",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 				{
			// 					"id": 970638031,
			// 					"value": "Android",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 				{
			// 					"id": 970638032,
			// 					"value": "iOS",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 				{
			// 					"id": 970688670,
			// 					"value": "All Platforms",
			// 					"info": "",
			// 					"picture": ""
			// 				}
			// 			]
			// 		},
			// 		{//Количество устройств
			// 			"complex_id": 0,
			// 			"id": 9294,
			// 			"values": [
			// 				{
			// 					"id": 45536,
			// 					"value": "10",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Срок действия лицензии
			// 			"complex_id": 0,
			// 			"id": 9297,
			// 			"values": [
			// 				{
			// 					"id": 970789268,
			// 					"value": "Бессрочный",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Тип ПО
			// 			"complex_id": 0,
			// 			"id": 9301,
			// 			"values": [
			// 				{
			// 					"id": 970670635,
			// 					"value": "Офисное приложение",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Упаковка
			// 			"complex_id": 0,
			// 			"id": 9303,
			// 			"values": [
			// 				{
			// 					"id": 115900262,
			// 					"value": "Картонная коробка",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Коммерческий тип
			// 			"complex_id": 0,
			// 			"id": 9461,
			// 			"values": [
			// 				{
			// 					"id": 970845752,
			// 					"value": "ПО на физических носителях",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Срок активации
			// 			"complex_id": 0,
			// 			"id": 9777,
			// 			"values": [
			// 				{
			// 					"id": 970789268,
			// 					"value": "Бессрочный",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Системные требования
			// 			"complex_id": 0,
			// 			"id": 9870,
			// 			"values": [
			// 				{
			// 					"value": "Microsoft Office 365 требует следующего оборудования и ПО:\n" +
			// 						"\n" +
			// 						"Процессор: 1 ГГц или быстрее\n" +
			// 						"ОЗУ: 2 ГБ\n" +
			// 						"Дисковое пространство: 3 ГБ свободного места\n" +
			// 						"Дисплей: Разрешение 1280 x 800 или выше\n" +
			// 						"Операционная система: Windows 11, Windows 10, Windows 8.1, Windows 7 с пакетом обновления 1, или Mac OS X 10.10 и выше\n" +
			// 						"Браузер: Последняя версия Internet Explorer, Edge, Chrome, Firefox или Safari\n" +
			// 						"Для некоторых функций могут понадобиться дополнительные компоненты, например, Skype для бизнеса или устройства для сканирования.\n" +
			// 						"Примечание: Для использования Office 365 также требуется интернет-подключение.",
			// 				}
			// 			]
			// 		},
			// 		// {//Рич контент
			// 		// 	"complex_id": 0,
			// 		// 	"id": 11254,
			// 		// 	"values": [
			// 		// 		{
			// 		// 			"value": "{\n  \"content\": [\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size5\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Инструкция по активации windows 10 pro\",\n          \"Активируем систему стандартными средствами\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-3/6509332215.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-b/6509332223.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Чтобы активировать Windows 10 вам потребуется ключ — набор символов,\",\n              \"который находится в конверте.\",\n              \"Ключ вводится во время инсталляции системы или после установки.\",\n              \"\",\n              \"•Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"В конверте с кодом вы так же найдете QR - код  для связи со службой поддержки \",\n          \"и помощи в активации!\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-t/6509332205.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-5/6509332217.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-i/6509332230.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт \",\n              \"«Активация». \",\n              \"\",\n              \"В зависимости от типа лицензии\",\n              \"процесс пройдёт либо в автоматическом режиме, либо с введением кода\",\n              \"вручную.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 1)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-c/6509332224.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-d/6509332225.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"\",\n              \"Необходимо:\",\n              \"  — телефон\",\n              \"  — ручка\",\n              \"  — блокнот для записи продиктованного кода.\",\n              \"\",\n              \"• Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-v/6509332207.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-8/6509332220.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-h/6509332229.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт «Активация».\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В новом окне выберите пункт \",\n              \"«Активировать по телефону».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-e/6512749382.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному или платному номерам и выполните следующие действия:\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \" 3) Активировать Windows 10 нажать — 1\",\n              \" 4) Без обновления жмём — 2\",\n              \" 5) Нет ключа — 2 (хоть и странно)\",\n              \" 6) Нет кода ошибки — 2\",\n              \" 7) Находитесь сейчас за ПК и открыто окно активации —1 \",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В ходе данного процесса Вас попросят ввести «ID установки», который состоит из 9 блоков, используя мобильное устройство. \",\n              \"Далее робот будет диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой».\",\n          \"\"\n        ],\n        \"size\": \"size6\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size1\",\n        \"align\": \"left\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 2)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-1/6509332213.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-9/6509332221.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"• Нажмите кнопку «Пуск» -> Поиск -> введите в поиске «slui 4.exe»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-l/6512749389.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Выполните звонок по бесплатному \",\n              \"или платному номерам и выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-x/6509332209.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"\",\n              \"• После ввода щёлкните кнопку\",\n              \"«Активация Windows»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 3)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"\",\n              \"•Требуется запустить командную строку от имени администратора. \",\n              \"Откройте «Пуск» и разверните «Служебные — Windows». \",\n              \"\",\n              \"Щёлкните правой кнопкой мыши по пункту «Командная строка», \",\n              \"выберите «Дополнительно» \",\n              \"\",\n              \"и нажмите \",\n              \"«Запуск от имени администратора»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"roll\",\n      \"blocks\": [\n        {\n          \"imgLink\": \"\",\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-g/6509332228.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-7/6509332219.jpg\",\n            \"alt\": \"Текстовое описание изображения\",\n            \"width\": 956,\n            \"height\": 597,\n            \"widthMobile\": 956,\n            \"heightMobile\": 597\n          }\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-n/6512749391.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-e/6509332226.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному \",\n              \"или платному номерам и \",\n              \"\",\n              \"выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-a/6509332222.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    }\n  ],\n  \"version\": 0.3\n}",
			// 		// 		}
			// 		// 	]
			// 		// },
			// 		{//Свободное место
			// 			"complex_id": 0,
			// 			"id": 11462,
			// 			"values": [
			// 				{
			// 					"value": "3"
			// 				}
			// 			]
			// 		},
			// 		{//Издание
			// 			"complex_id": 0,
			// 			"id": 11467,
			// 			"values": [
			// 				{
			// 					"id": 970831211,
			// 					"value": "Расширенное",
			// 					"info": "",
			// 					"picture": ""
			// 				}
			// 			]
			// 		},
			// 		{//Языки
			// 			"complex_id": 0,
			// 			"id": 11469,
			// 			"values": [
			// 				{
			// 					"id": 970831215,
			// 					"value": "Русская версия",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 				{
			// 					"id": 970831217,
			// 					"value": "Оригинальный",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{//Количество в заводских упаковках
			// 			"complex_id": 0,
			// 			"id": 11650,
			// 			"values": [
			// 				{
			// 					"value": "10"
			// 				}
			// 			]
			// 		},
			// 		// {
			// 		// 	"complex_id": 0,
			// 		// 	"id": 5162,
			// 		// 	"values": [
			// 		// 		{
			// 		// 			"id": 29934,
			// 		// 			"value": "Windows",
			// 		// 			"info": "",
			// 		// 			"picture": ""
			// 		// 		},
			// 		// 	]
			// 		// },
			// 		{//Страна
			// 			"complex_id": 0,
			// 			"id": 4320,
			// 			"values": [
			// 				{
			// 					"id": 90295,
			// 					"value": "Россия",
			// 					"info": "",
			// 					"picture": ""
			// 				},
			// 			]
			// 		},
			// 		{
			// 			"complex_id": 0,
			// 			"id": 4384,
			// 			"values": [
			// 				{
			// 					"value": "В комплект входит лицензионное Программное обеспечение! По всем вопросам пишите в чат!",
			// 				}
			// 			]
			// 		},
			// 		// {
			// 		// 	"complex_id": 0,
			// 		// 	"id": 9048,
			// 		// 	"values": [
			// 		// 		{
			// 		// 			"value": `win_win_${random}`,
			// 		// 		}
			// 		// 	]
			// 		// },
			// 		// {//ключевые слова
			// 		// 	"complex_id": 0,
			// 		// 	"id": 22336,
			// 		// 	"values": [
			// 		// 		{
			// 		// 			"value": "Windows 10 Pro, Windows 10 Professional, виндовс 10 про, виндовс 10 профессионал, помощь, активации, лицензия, лицензионный",
			// 		// 		}
			// 		// 	]
			// 		// },
			// 	],
			//
			// }




			const response = {
				"items": []
			}
			let i = 0
			while(i< dto.count){
				const random = Math.floor(10000 + Math.random() * 9000000)
				const productOffice = {
					"name": `Office 365 для MacOS - макбук MacBook Windows / Бессрочно, (${random})`,
					"offer_id": `Office365_${random}`,
					"category_id": 24027908,
					"images": [
						"https://cdn1.ozone.ru/s3/multimedia-7/6541651543.jpg",
						"https://cdn1.ozone.ru/s3/multimedia-3/6541651539.jpg",
						"https://cdn1.ozone.ru/s3/multimedia-4/6541651540.jpg",
						"https://cdn1.ozone.ru/s3/multimedia-2/6541651538.jpg",
						"https://cdn1.ozone.ru/s3/multimedia-5/6541651541.jpg",
						"https://cdn1.ozone.ru/s3/multimedia-8/6541651544.jpg",
						"https://cdn1.ozone.ru/s3/multimedia-1/6541651537.jpg",
						"https://cdn1.ozone.ru/s3/multimedia-6/6541651542.jpg"
					],
					"primary_image": "https://cdn1.ozone.ru/s3/multimedia-0/6541651536.jpg",
					"marketing_price": "5460.0000",
					"min_ozon_price": "",
					"old_price": "17173.0000",
					"premium_price": "",
					"price": "7173.0000",
					"recommended_price": "",
					"min_price": "",
					"currency_code": "RUB",
					"vat": "0",
					"weight": 150,
					"weight_unit": "g",
					"depth": 40,
					"dimension_unit": "mm",
					"width": 100,
					"height": 100,
					"attributes": [
						{//название
							"complex_id": 0,
							"id": 4180,
							"values": [
								{
									"value": `Office 365 для MacOS - макбук MacBook Windows / Бессрочно, (${random})`
								}
							]
						},
						{//тип товара
							"complex_id": 0,
							"id": 8229,
							"values": [
								{
									"id": 392638731,
									"value": "Программа",
									"info": "",
									"picture": ""
								}
							]
						},
						{//Возрастные ограничения
							"complex_id": 0,
							"id": 9276,
							"values": [
								{
									"id": 28692,
									"value": "0+",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Жанр ПО
							"complex_id": 0,
							"id": 9279,
							"values": [
								{
									"id": 87549228,
									"value": "Операционные системы//Microsoft Windows",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Тип носителя
							"complex_id": 0,
							"id": 9300,
							"values": [
								{
									"id": 970593769,
									"value": "Картридж",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Издатель
							"complex_id": 0,
							"id": 74,
							"values": [
								{
									"id": 5078229,
									"value": "Microsoft",
									"info": "",
									"picture": ""
								},
								{
									"id": 115840342,
									"value": "Microsoft Corporation",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Разработчик
							"complex_id": 0,
							"id": 77,
							"values": [
								{
									"id": 5078229,
									"value": "Microsoft",
									"info": "",
									"picture": ""
								},
								{
									"id": 115840342,
									"value": "Microsoft Corporation",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Бренд
							"complex_id": 0,
							"id": 85,
							"values": [
								{
									"id": 5105339,
									"value": "Microsoft",
									"info": " Продукт медиа",
									"picture": "https://cdn1.ozone.ru/multimedia/1014181631.jpg"
								},
							]
						},
						{//Год Выпуска
							"complex_id": 0,
							"id": 4081,
							"values": [
								{
									"value": "2023",
								}
							]
						},
						{//Описание
							"complex_id": 0,
							"id": 4191,
							"values": [
								{
									"value": "Обратите Внимание! В комплекте поставки ЛОГИН и ПАРОЛЬ для доступа ко всем функциям Microsoft Office 365",
								}
							]
						},
						{//Количество носителей
							"complex_id": 0,
							"id": 4311,
							"values": [
								{
									"value": "1",
								}
							]
						},
						{//Версия ОС
							"complex_id": 0,
							"id": 4359,
							"values": [
								{
									"id": 82072,
									"value": "Windows",
									"info": "",
									"picture": ""
								},
								{
									"id": 82073,
									"value": "Windows 10",
									"info": "",
									"picture": ""
								},
								{
									"id": 970638224,
									"value": "32-bit Win",
									"info": "",
									"picture": ""
								},
								{
									"id": 970638225,
									"value": "64-Bit Win",
									"info": "",
									"picture": ""
								},
								{
									"id": 82042,
									"value": "macOS",
									"info": "",
									"picture": ""
								},
								{
									"id": 970638031,
									"value": "Android",
									"info": "",
									"picture": ""
								},
								{
									"id": 970638032,
									"value": "iOS",
									"info": "",
									"picture": ""
								},
								{
									"id": 970688670,
									"value": "All Platforms",
									"info": "",
									"picture": ""
								}
							]
						},
						{//Количество устройств
							"complex_id": 0,
							"id": 9294,
							"values": [
								{
									"id": 45536,
									"value": "10",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Срок действия лицензии
							"complex_id": 0,
							"id": 9297,
							"values": [
								{
									"id": 970789268,
									"value": "Бессрочный",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Тип ПО
							"complex_id": 0,
							"id": 9301,
							"values": [
								{
									"id": 970670635,
									"value": "Офисное приложение",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Упаковка
							"complex_id": 0,
							"id": 9303,
							"values": [
								{
									"id": 115900262,
									"value": "Картонная коробка",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Коммерческий тип
							"complex_id": 0,
							"id": 9461,
							"values": [
								{
									"id": 970845752,
									"value": "ПО на физических носителях",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Срок активации
							"complex_id": 0,
							"id": 9777,
							"values": [
								{
									"id": 970789268,
									"value": "Бессрочный",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Системные требования
							"complex_id": 0,
							"id": 9870,
							"values": [
								{
									"value": "Microsoft Office 365 требует следующего оборудования и ПО:\n" +
										"\n" +
										"Процессор: 1 ГГц или быстрее\n" +
										"ОЗУ: 2 ГБ\n" +
										"Дисковое пространство: 3 ГБ свободного места\n" +
										"Дисплей: Разрешение 1280 x 800 или выше\n" +
										"Операционная система: Windows 11, Windows 10, Windows 8.1, Windows 7 с пакетом обновления 1, или Mac OS X 10.10 и выше\n" +
										"Браузер: Последняя версия Internet Explorer, Edge, Chrome, Firefox или Safari\n" +
										"Для некоторых функций могут понадобиться дополнительные компоненты, например, Skype для бизнеса или устройства для сканирования.\n" +
										"Примечание: Для использования Office 365 также требуется интернет-подключение.",
								}
							]
						},
						// {//Рич контент
						// 	"complex_id": 0,
						// 	"id": 11254,
						// 	"values": [
						// 		{
						// 			"value": "{\n  \"content\": [\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size5\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Инструкция по активации windows 10 pro\",\n          \"Активируем систему стандартными средствами\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-3/6509332215.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-b/6509332223.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Чтобы активировать Windows 10 вам потребуется ключ — набор символов,\",\n              \"который находится в конверте.\",\n              \"Ключ вводится во время инсталляции системы или после установки.\",\n              \"\",\n              \"•Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"В конверте с кодом вы так же найдете QR - код  для связи со службой поддержки \",\n          \"и помощи в активации!\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-t/6509332205.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-5/6509332217.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-i/6509332230.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт \",\n              \"«Активация». \",\n              \"\",\n              \"В зависимости от типа лицензии\",\n              \"процесс пройдёт либо в автоматическом режиме, либо с введением кода\",\n              \"вручную.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 1)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-c/6509332224.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-d/6509332225.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"\",\n              \"Необходимо:\",\n              \"  — телефон\",\n              \"  — ручка\",\n              \"  — блокнот для записи продиктованного кода.\",\n              \"\",\n              \"• Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-v/6509332207.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-8/6509332220.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-h/6509332229.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт «Активация».\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В новом окне выберите пункт \",\n              \"«Активировать по телефону».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-e/6512749382.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному или платному номерам и выполните следующие действия:\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \" 3) Активировать Windows 10 нажать — 1\",\n              \" 4) Без обновления жмём — 2\",\n              \" 5) Нет ключа — 2 (хоть и странно)\",\n              \" 6) Нет кода ошибки — 2\",\n              \" 7) Находитесь сейчас за ПК и открыто окно активации —1 \",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В ходе данного процесса Вас попросят ввести «ID установки», который состоит из 9 блоков, используя мобильное устройство. \",\n              \"Далее робот будет диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой».\",\n          \"\"\n        ],\n        \"size\": \"size6\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size1\",\n        \"align\": \"left\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 2)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-1/6509332213.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-9/6509332221.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"• Нажмите кнопку «Пуск» -> Поиск -> введите в поиске «slui 4.exe»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-l/6512749389.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Выполните звонок по бесплатному \",\n              \"или платному номерам и выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-x/6509332209.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"\",\n              \"• После ввода щёлкните кнопку\",\n              \"«Активация Windows»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 3)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"\",\n              \"•Требуется запустить командную строку от имени администратора. \",\n              \"Откройте «Пуск» и разверните «Служебные — Windows». \",\n              \"\",\n              \"Щёлкните правой кнопкой мыши по пункту «Командная строка», \",\n              \"выберите «Дополнительно» \",\n              \"\",\n              \"и нажмите \",\n              \"«Запуск от имени администратора»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"roll\",\n      \"blocks\": [\n        {\n          \"imgLink\": \"\",\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-g/6509332228.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-7/6509332219.jpg\",\n            \"alt\": \"Текстовое описание изображения\",\n            \"width\": 956,\n            \"height\": 597,\n            \"widthMobile\": 956,\n            \"heightMobile\": 597\n          }\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-n/6512749391.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-e/6509332226.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному \",\n              \"или платному номерам и \",\n              \"\",\n              \"выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-a/6509332222.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    }\n  ],\n  \"version\": 0.3\n}",
						// 		}
						// 	]
						// },
						{//Свободное место
							"complex_id": 0,
							"id": 11462,
							"values": [
								{
									"value": "3"
								}
							]
						},
						{//Издание
							"complex_id": 0,
							"id": 11467,
							"values": [
								{
									"id": 970831211,
									"value": "Расширенное",
									"info": "",
									"picture": ""
								}
							]
						},
						{//Языки
							"complex_id": 0,
							"id": 11469,
							"values": [
								{
									"id": 970831215,
									"value": "Русская версия",
									"info": "",
									"picture": ""
								},
								{
									"id": 970831217,
									"value": "Оригинальный",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Количество в заводских упаковках
							"complex_id": 0,
							"id": 11650,
							"values": [
								{
									"value": "10"
								}
							]
						},
						// {
						// 	"complex_id": 0,
						// 	"id": 5162,
						// 	"values": [
						// 		{
						// 			"id": 29934,
						// 			"value": "Windows",
						// 			"info": "",
						// 			"picture": ""
						// 		},
						// 	]
						// },
						{//Страна
							"complex_id": 0,
							"id": 4320,
							"values": [
								{
									"id": 90295,
									"value": "Россия",
									"info": "",
									"picture": ""
								},
							]
						},
						{
							"complex_id": 0,
							"id": 4384,
							"values": [
								{
									"value": "В комплект входит лицензионное Программное обеспечение! По всем вопросам пишите в чат!",
								}
							]
						},
						// {
						// 	"complex_id": 0,
						// 	"id": 9048,
						// 	"values": [
						// 		{
						// 			"value": `win_win_${random}`,
						// 		}
						// 	]
						// },
						// {//ключевые слова
						// 	"complex_id": 0,
						// 	"id": 22336,
						// 	"values": [
						// 		{
						// 			"value": "Windows 10 Pro, Windows 10 Professional, виндовс 10 про, виндовс 10 профессионал, помощь, активации, лицензия, лицензионный",
						// 		}
						// 	]
						// },
					],
				}
				const productOffice2021 = {
					"name": `Microsoft Office 2021 Pro Plus для Windows без привязки к аккаунту / Бессрочная лицензия и помощь в активации, (${random})`,
					"offer_id": `Office2021_${random}`,
					"category_id": 24027908,
					"images": [
						"https://cdn1.ozone.ru/s3/multimedia-a/6541063846.jpg",
					],
					"primary_image": "https://cdn1.ozone.ru/s3/multimedia-a/6541063846.jpg",
					"marketing_price": "7460.0000",
					"min_ozon_price": "",
					"old_price": "15173.0000",
					"premium_price": "",
					"price": "9173.0000",
					"recommended_price": "",
					"min_price": "",
					"currency_code": "RUB",
					"vat": "0",
					"weight": 100,
					"weight_unit": "g",
					"depth": 40,
					"dimension_unit": "mm",
					"width": 100,
					"height": 80,
					"attributes": [
						{//название
							"complex_id": 0,
							"id": 4180,
							"values": [
								{
									"value": `Microsoft Office 2021 Pro Plus для Windows без привязки к аккаунту / Бессрочная лицензия и помощь в активации, (${random})`
								}
							]
						},
						{//тип товара
							"complex_id": 0,
							"id": 8229,
							"values": [
								{
									"id": 392638731,
									"value": "Программа",
									"info": "",
									"picture": ""
								}
							]
						},
						{//Возрастные ограничения
							"complex_id": 0,
							"id": 9276,
							"values": [
								{
									"id": 28692,
									"value": "0+",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Жанр ПО
							"complex_id": 0,
							"id": 9279,
							"values": [
								{
									"id": 87549222,
									"value": "Программное обеспечение//Офисные программы",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Тип носителя
							"complex_id": 0,
							"id": 9300,
							"values": [
								{
									"id": 970593769,
									"value": "Картридж",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Издатель
							"complex_id": 0,
							"id": 74,
							"values": [
								{
									"id": 5078229,
									"value": "Microsoft",
									"info": "",
									"picture": ""
								},
								{
									"id": 115840342,
									"value": "Microsoft Corporation",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Разработчик
							"complex_id": 0,
							"id": 77,
							"values": [
								{
									"id": 5078229,
									"value": "Microsoft",
									"info": "",
									"picture": ""
								},
								{
									"id": 115840342,
									"value": "Microsoft Corporation",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Бренд
							"complex_id": 0,
							"id": 85,
							"values": [
								{
									"id": 5105339,
									"value": "Microsoft",
									"info": " Продукт медиа",
									"picture": "https://cdn1.ozone.ru/multimedia/1014181631.jpg"
								},
							]
						},
						{//Год Выпуска
							"complex_id": 0,
							"id": 4081,
							"values": [
								{
									"value": "2023",
								}
							]
						},
						{//Описание
							"complex_id": 0,
							"id": 4191,
							"values": [
								{
									"value": "Офис 2021 - это набор программного обеспечения для работы с документами, презентациями и другими бизнес-приложениями, созданный корпорацией Microsoft. Он предназначен для использования в офисных условиях и на домашнем компьютере.</br> Новая версия офисного пакета включает в себя такие приложения, как Word, Excel, PowerPoint и другие. Офис 2021 предоставляет широкий спектр возможностей для создания, редактирования и обработки документов, таблиц, презентаций и баз данных.",
								}
							]
						},
						{//Количество носителей
							"complex_id": 0,
							"id": 4311,
							"values": [
								{
									"value": "1",
								}
							]
						},
						{//Версия ОС
							"complex_id": 0,
							"id": 4359,
							"values": [
								{
									"id": 82072,
									"value": "Windows",
									"info": "",
									"picture": ""
								},
								{
									"id": 82073,
									"value": "Windows 10",
									"info": "",
									"picture": ""
								},
								{
									"id": 970638224,
									"value": "32-bit Win",
									"info": "",
									"picture": ""
								},
								{
									"id": 970638225,
									"value": "64-Bit Win",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Количество устройств
							"complex_id": 0,
							"id": 9294,
							"values": [
								{
									"id": 45536,
									"value": "10",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Срок действия лицензии
							"complex_id": 0,
							"id": 9297,
							"values": [
								{
									"id": 970789268,
									"value": "Бессрочный",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Тип ПО
							"complex_id": 0,
							"id": 9301,
							"values": [
								{
									"id": 970670635,
									"value": "Офисное приложение",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Упаковка
							"complex_id": 0,
							"id": 9303,
							"values": [
								{
									"id": 115900262,
									"value": "Картонная коробка",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Коммерческий тип
							"complex_id": 0,
							"id": 9461,
							"values": [
								{
									"id": 970845752,
									"value": "ПО на физических носителях",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Срок активации
							"complex_id": 0,
							"id": 9777,
							"values": [
								{
									"id": 970789268,
									"value": "Бессрочный",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Системные требования
							"complex_id": 0,
							"id": 9870,
							"values": [
								{
									"value": "Microsoft Office 2021 требует следующего оборудования и ПО:\n" +
										"\n" +
										"Процессор: 1 ГГц или быстрее\n" +
										"ОЗУ: 2 ГБ\n" +
										"Дисковое пространство: 3 ГБ свободного места\n" +
										"Дисплей: Разрешение 1280 x 800 или выше\n" +
										"Операционная система: Windows 11, Windows 10\n" +
										"Браузер: Последняя версия Internet Explorer, Edge, Chrome, Firefox или Safari\n" +
										"Для некоторых функций могут понадобиться дополнительные компоненты, например, Skype для бизнеса или устройства для сканирования.\n"

								}
							]
						},
						// {//Рич контент
						// 	"complex_id": 0,
						// 	"id": 11254,
						// 	"values": [
						// 		{
						// 			"value": "{\n  \"content\": [\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size5\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Инструкция по активации windows 10 pro\",\n          \"Активируем систему стандартными средствами\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-3/6509332215.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-b/6509332223.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Чтобы активировать Windows 10 вам потребуется ключ — набор символов,\",\n              \"который находится в конверте.\",\n              \"Ключ вводится во время инсталляции системы или после установки.\",\n              \"\",\n              \"•Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"В конверте с кодом вы так же найдете QR - код  для связи со службой поддержки \",\n          \"и помощи в активации!\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-t/6509332205.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-5/6509332217.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-i/6509332230.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт \",\n              \"«Активация». \",\n              \"\",\n              \"В зависимости от типа лицензии\",\n              \"процесс пройдёт либо в автоматическом режиме, либо с введением кода\",\n              \"вручную.\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 1)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-c/6509332224.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-d/6509332225.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"\",\n              \"Необходимо:\",\n              \"  — телефон\",\n              \"  — ручка\",\n              \"  — блокнот для записи продиктованного кода.\",\n              \"\",\n              \"• Нажмите кнопку «Пуск» -> Параметры.\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-v/6509332207.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-w/6509332208.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Перейдите в раздел \",\n              \"«Обновление и безопасность».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-8/6509332220.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-h/6509332229.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В новом окне выберите пункт «Активация».\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-6/6509332218.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В новом окне выберите пункт \",\n              \"«Активировать по телефону».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-e/6512749382.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному или платному номерам и выполните следующие действия:\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \" 3) Активировать Windows 10 нажать — 1\",\n              \" 4) Без обновления жмём — 2\",\n              \" 5) Нет ключа — 2 (хоть и странно)\",\n              \" 6) Нет кода ошибки — 2\",\n              \" 7) Находитесь сейчас за ПК и открыто окно активации —1 \",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•В ходе данного процесса Вас попросят ввести «ID установки», который состоит из 9 блоков, используя мобильное устройство. \",\n              \"Далее робот будет диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-f/6509332227.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \" вы будете пользоваться уже активированной «десяткой».\",\n          \"\"\n        ],\n        \"size\": \"size6\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size1\",\n        \"align\": \"left\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 2)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-1/6509332213.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-9/6509332221.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. \",\n              \"Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"• Нажмите кнопку «Пуск» -> Поиск -> введите в поиске «slui 4.exe»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-l/6512749389.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-2/6509332214.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"•Выполните звонок по бесплатному \",\n              \"или платному номерам и выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-x/6509332209.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size4\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"\",\n              \"• После ввода щёлкните кнопку\",\n              \"«Активация Windows»\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color4\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"primary\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"m\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color4\",\n        \"content\": [\n          \"Активация по телефону (вариант 3)\",\n          \"\",\n          \"\"\n        ]\n      }\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-j/6509332231.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"Активация по телефону может понадобиться, когда по каким-то причинам отсутствует интернет-подключение или его использование ограничено лимитированным трафиком. Необходимы собственно телефон, ручка и блокнот для записи продиктованного кода.\",\n              \"\",\n              \"•Требуется запустить командную строку от имени администратора. \",\n              \"Откройте «Пуск» и разверните «Служебные — Windows». \",\n              \"\",\n              \"Щёлкните правой кнопкой мыши по пункту «Командная строка», \",\n              \"выберите «Дополнительно» \",\n              \"\",\n              \"и нажмите \",\n              \"«Запуск от имени администратора»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"roll\",\n      \"blocks\": [\n        {\n          \"imgLink\": \"\",\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-g/6509332228.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-7/6509332219.jpg\",\n            \"alt\": \"Текстовое описание изображения\",\n            \"width\": 956,\n            \"height\": 597,\n            \"widthMobile\": 956,\n            \"heightMobile\": 597\n          }\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-u/6509332206.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В появившейся вкладке выберите страну, в которой проживаете. \",\n              \"\",\n              \"Щёлкните по кнопке «Далее»\",\n              \"\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-n/6512749391.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-e/6509332226.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size5\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Выполните звонок по бесплатному \",\n              \"или платному номерам и \",\n              \"\",\n              \"выполните следующие действия:\",\n              \"\",\n              \"1) Нажимаем — 2 (Отказываемся от записи разговора)\",\n              \"2) Активировать нажимаем — 1\",\n              \"3) Активировать Windows 10 нажать — 1\",\n              \"4) Без обновления жмём — 2\",\n              \"5) Нет ключа — 2 (хоть и странно)\",\n              \"6) Нет кода ошибки — 2\",\n              \"7) Находитесь сейчас за ПК и открыто окно активации — 1\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-4/6509332216.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• В ходе данного процесса Вас попросят ввести «ID установки», который\",\n              \"состоит из 9 блоков, используя мобильное устройство. Далее робот будет\",\n              \"диктовать Вам ответные числа, их нужно будет ввести в блоки от A до H. \",\n              \"\",\n              \"• По завершении нажмите кнопку \",\n              \"«Введите код подтверждения».\",\n              \"\"\n            ]\n          },\n          \"reverse\": true\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raShowcase\",\n      \"type\": \"chess\",\n      \"blocks\": [\n        {\n          \"img\": {\n            \"src\": \"https://cdn1.ozone.ru/s3/multimedia-a/6509332222.jpg\",\n            \"srcMobile\": \"https://cdn1.ozone.ru/s3/multimedia-0/6509332212.jpg\",\n            \"alt\": \"Текст при отключенной в браузере загрузке изображений\",\n            \"width\": 708,\n            \"height\": 708,\n            \"widthMobile\": 640,\n            \"heightMobile\": 640\n          },\n          \"imgLink\": \"\",\n          \"title\": {\n            \"content\": [],\n            \"size\": \"size1\",\n            \"align\": \"left\",\n            \"color\": \"color1\"\n          },\n          \"text\": {\n            \"size\": \"size6\",\n            \"align\": \"left\",\n            \"color\": \"color1\",\n            \"content\": [\n              \"• Введите код подтверждения в окно Windows. \",\n              \"После ввода щёлкните кнопку\",\n              \"«Активация Windows».\",\n              \"\"\n            ]\n          },\n          \"reverse\": false\n        }\n      ]\n    },\n    {\n      \"widgetName\": \"raTextBlock\",\n      \"title\": {\n        \"content\": [\n          \"\",\n          \"\"\n        ],\n        \"size\": \"size1\",\n        \"color\": \"color1\",\n        \"align\": \"center\"\n      },\n      \"theme\": \"default\",\n      \"padding\": \"type1\",\n      \"gapSize\": \"s\",\n      \"text\": {\n        \"size\": \"size6\",\n        \"align\": \"center\",\n        \"color\": \"color1\",\n        \"content\": [\n          \"Выполнив перезагрузку компьютера,\",\n          \"вы будете пользоваться уже активированной «десяткой»\",\n          \"\"\n        ]\n      }\n    }\n  ],\n  \"version\": 0.3\n}",
						// 		}
						// 	]
						// },
						{//Свободное место
							"complex_id": 0,
							"id": 11462,
							"values": [
								{
									"value": "3"
								}
							]
						},
						{//Издание
							"complex_id": 0,
							"id": 11467,
							"values": [
								{
									"id": 970831211,
									"value": "Расширенное",
									"info": "",
									"picture": ""
								}
							]
						},
						{//Языки
							"complex_id": 0,
							"id": 11469,
							"values": [
								{
									"id": 970831215,
									"value": "Русская версия",
									"info": "",
									"picture": ""
								},
								{
									"id": 970831217,
									"value": "Оригинальный",
									"info": "",
									"picture": ""
								},
							]
						},
						{//Количество в заводских упаковках
							"complex_id": 0,
							"id": 11650,
							"values": [
								{
									"value": "1"
								}
							]
						},
						// {
						// 	"complex_id": 0,
						// 	"id": 5162,
						// 	"values": [
						// 		{
						// 			"id": 29934,
						// 			"value": "Windows",
						// 			"info": "",
						// 			"picture": ""
						// 		},
						// 	]
						// },
						{//Страна
							"complex_id": 0,
							"id": 4320,
							"values": [
								{
									"id": 90295,
									"value": "Россия",
									"info": "",
									"picture": ""
								},
							]
						},
						{
							"complex_id": 0,
							"id": 4384,
							"values": [
								{
									"value": "В комплект входит лицензионное Программное обеспечение! По всем вопросам пишите в чат!",
								}
							]
						},
						// {
						// 	"complex_id": 0,
						// 	"id": 9048,
						// 	"values": [
						// 		{
						// 			"value": `win_win_${random}`,
						// 		}
						// 	]
						// },
						// {//ключевые слова
						// 	"complex_id": 0,
						// 	"id": 22336,
						// 	"values": [
						// 		{
						// 			"value": "Windows 10 Pro, Windows 10 Professional, виндовс 10 про, виндовс 10 профессионал, помощь, активации, лицензия, лицензионный",
						// 		}
						// 	]
						// },
					],

				}

				response.items.push(productOffice2021)
				i++
			}
			return response

			//10
			// https://cdn1.ozone.ru/s3/multimedia-x/6501416565.jpg
			//11
			//https://cdn1.ozone.ru/s3/multimedia-g/6510137584.jpg
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
		}
	}
}
