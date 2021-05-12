import Main from '@/main'

let instance: Main
beforeEach(() => {
  instance = new Main()
})
test('sync', () => {
  expect(instance.syncMethod()).toBe('hogehoge')
})
