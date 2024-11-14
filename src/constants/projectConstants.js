export const tableHeaders = [
    {
        field: 'uid1c',
        label: 'Номер заказа (ID)'
    },
    {
        field: 'created',
        label: 'Дата-время создания заказа'
    },
    {
        field: 'status',
        label: 'Статус заказа'
    },
    {
        field: 'shipment',
        label: 'Тип отгрузки'
    },
    {
        field: 'date',
        label: 'Дата отгрузки'
    },
    {
        field: 'payment',
        label: 'Способ оплаты'
    },
    {
        field: 'shop',
        label: 'Место отгрузки (адрес магазина)'
    },
    {
        field: 'client',
        label: 'ФИО клиента'
    },
    {
        field: 'amount',
        label: 'Сумма заказа'
    },
    {
        field: 'quantity',
        label: 'Количество товаров в заказе'
    },
    {
        field: 'operator',
        label: 'Кто создал заказ (оператор)'
    }
]

export const simpleFields = [ 'uid1c', 'created', 'quantity', 'operator']

export const fieldsWithMethod = [ 'payment', 'shipment']

export const orderFields = [
    {
        field: 'uid1c',
        label: 'Номер заказа (ID)'
    },
    {
        field: 'operator',
        label: 'Оператор'
    },
    {
        field: 'client',
        label: 'ФИО клиента'
    },
    {
        field: 'client_phone',
        label: 'Телефон клиента'
    },
    {
        field: 'shop',
        label: 'Магазин'
    },
    {
        field: 'payment_method',
        label: 'Способ оплаты'
    },
    {
        field: 'payment_status',
        label: 'Статус оплаты'
    },
]

export const itemFields = [
    {
        field: 'title',
        label: 'Наименование товара'
    },
    {
        field: 'quantity',
        label: 'Количество'
    },
    {
        field: 'price',
        label: 'Цена'
    },
    {
        field: 'status',
        label: 'Статус резервирования'
    },
]

export const orderStatusDropdown = [
    {
        value: '1',
        label: 'Заказ обрабатывается'
    },
    {
        value: '2',
        label: 'Заказ обработан'
    },
    {
        value: '3',
        label: 'Не хватило товара для резервирования'
    },
    {
        value: '4',
        label: 'Заказ выполнен'
    },
    {
        value: '5',
        label: 'Заказ отменен'
    },
    {
        value: '6',
        label: 'Заказ зарезервирован'
    },
]

export const ordersEndpoint = 'https://msk.ivanor.ru/front/service/test-api/v1/orders'
export const oneOrderEndpoint = ' https://msk.ivanor.ru/front/service/test-api/v1/order/'