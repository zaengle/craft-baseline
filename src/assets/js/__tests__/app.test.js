import { init } from '~/app'

beforeEach(() => {
  vi.resetModules()
  vi.clearAllMocks()
})

describe('app', () => {
  it('initializes the app', () => {
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementationOnce(() => {})

    init()

    expect(consoleLogSpy).toHaveBeenCalledWith('hello world!')
  })
})
