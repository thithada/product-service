import { SimpleServiceImpl } from "./simple";

 test('SimpleServiceImpl ok', () => {
    let service = new SimpleServiceImpl()
    expect(service.ok()).toBe('OK')
 })