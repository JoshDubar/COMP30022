import React from 'react'
import { render } from 'utils/test-utils'
import { RoundsView } from 'components'
import { stubRoundData } from 'tests/stub'

describe('RoundsView', () => {
    test('renders correctly', () => {
        const { container } = render(<RoundsView rounds={stubRoundData} showEditButtons={false} />)

        expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="chakra-tabs css-7wh13m"
  >
    <div
      aria-orientation="horizontal"
      class="chakra-tabs__tablist css-r9lthd"
      role="tablist"
    >
      <div
        class="css-gmuwbf"
      >
        <p
          class="chakra-text css-r56qz1"
        >
          ROUND
        </p>
      </div>
      <button
        aria-controls="tabs-1--tabpanel-0"
        aria-selected="true"
        class="chakra-tabs__tab css-2o1ju4"
        data-index="0"
        id="tabs-1--tab-0"
        role="tab"
        tabindex="0"
        type="button"
      >
        1
      </button>
      <button
        aria-controls="tabs-1--tabpanel-1"
        aria-selected="false"
        class="chakra-tabs__tab css-2o1ju4"
        data-index="1"
        id="tabs-1--tab-1"
        role="tab"
        tabindex="-1"
        type="button"
      >
        2
      </button>
    </div>
    <div
      class="chakra-tabs__tab-panels css-8atqhb"
    >
      <div
        aria-labelledby="tabs-1--tab-0"
        class="chakra-tabs__tab-panel css-1srfuc5"
        id="tabs-1--tabpanel-0"
        role="tabpanel"
        tabindex="0"
      >
        <div
          class="chakra-stack css-1qqukx9"
        >
          <div
            class="chakra-stack css-1twuvi0"
          >
            <div
              class="css-1m4qy5h"
            >
              <div
                class="css-16vysr"
              >
                <div
                  class="css-ys3583"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    Jane's BBallers
                  </p>
                </div>
                <div
                  class="css-11cj219"
                >
                  <p
                    class="chakra-text css-1at3bww"
                  >
                    111
                  </p>
                </div>
                <div
                  class="css-2bw7u8"
                >
                  <div
                    class="css-wvo25n"
                  >
                    <div
                      class="css-gmuwbf"
                    >
                      COMPLETED
                    </div>
                  </div>
                </div>
                <div
                  class="css-18mjmcj"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    Lygon Kangaroos
                  </p>
                </div>
                <div
                  class="css-1apo5ro"
                >
                  <p
                    class="chakra-text css-1oz5t98"
                  >
                    100
                  </p>
                </div>
                <div
                  class="css-16w3wmk"
                >
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-14p7a2y"
                  />
                </div>
                <div
                  class="css-1gohen6"
                >
                  <div
                    class="chakra-stack css-13kyi4y"
                  >
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        class="chakra-icon css-pj1t66"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="currentColor"
                        >
                          <path
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
                          />
                          <path
                            d="M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"
                          />
                        </g>
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        9/23/2021, 10:49:50 PM
                      </p>
                    </div>
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h24v24H0V0z"
                          fill="none"
                        />
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                        />
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        John's Basketball Arena
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="chakra-stack css-1twuvi0"
          >
            <div
              class="css-1m4qy5h"
            >
              <div
                class="css-16vysr"
              >
                <div
                  class="css-ys3583"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    Brunswick Emus
                  </p>
                </div>
                <div
                  class="css-11cj219"
                >
                  <p
                    class="chakra-text css-1at3bww"
                  >
                    121
                  </p>
                </div>
                <div
                  class="css-2bw7u8"
                >
                  <div
                    class="css-wvo25n"
                  >
                    <div
                      class="css-gmuwbf"
                    >
                      COMPLETED
                    </div>
                  </div>
                </div>
                <div
                  class="css-18mjmcj"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    Swinburne Bulls
                  </p>
                </div>
                <div
                  class="css-1apo5ro"
                >
                  <p
                    class="chakra-text css-1oz5t98"
                  >
                    120
                  </p>
                </div>
                <div
                  class="css-16w3wmk"
                >
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-14p7a2y"
                  />
                </div>
                <div
                  class="css-1gohen6"
                >
                  <div
                    class="chakra-stack css-13kyi4y"
                  >
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        class="chakra-icon css-pj1t66"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="currentColor"
                        >
                          <path
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
                          />
                          <path
                            d="M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"
                          />
                        </g>
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        9/26/2021, 10:49:50 PM
                      </p>
                    </div>
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h24v24H0V0z"
                          fill="none"
                        />
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                        />
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        John's Basketball Arena
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="chakra-stack css-1twuvi0"
          >
            <div
              class="css-1m4qy5h"
            >
              <div
                class="css-16vysr"
              >
                <div
                  class="css-ys3583"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    John's BBallers
                  </p>
                </div>
                <div
                  class="css-11cj219"
                >
                  <p
                    class="chakra-text css-1oz5t98"
                  >
                    95
                  </p>
                </div>
                <div
                  class="css-2bw7u8"
                >
                  <div
                    class="css-wvo25n"
                  >
                    <div
                      class="css-gmuwbf"
                    >
                      COMPLETED
                    </div>
                  </div>
                </div>
                <div
                  class="css-18mjmcj"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    Lygon Kangaroos
                  </p>
                </div>
                <div
                  class="css-1apo5ro"
                >
                  <p
                    class="chakra-text css-1at3bww"
                  >
                    100
                  </p>
                </div>
                <div
                  class="css-16w3wmk"
                >
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-14p7a2y"
                  />
                </div>
                <div
                  class="css-1gohen6"
                >
                  <div
                    class="chakra-stack css-13kyi4y"
                  >
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        class="chakra-icon css-pj1t66"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="currentColor"
                        >
                          <path
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
                          />
                          <path
                            d="M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"
                          />
                        </g>
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        9/28/2021, 10:49:50 PM
                      </p>
                    </div>
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h24v24H0V0z"
                          fill="none"
                        />
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                        />
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        John's Basketball Arena
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="css-1c152gq"
          >
            <div
              class="chakra-stack css-1tnb96d"
            >
              <p
                class="chakra-text css-11wrcrc"
              >
                Bye Bye Team
              </p>
              <div
                class="css-1bt7j4"
              >
                <div
                  class="css-gmuwbf"
                >
                  BYE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-labelledby="tabs-1--tab-1"
        class="chakra-tabs__tab-panel css-1srfuc5"
        hidden=""
        id="tabs-1--tabpanel-1"
        role="tabpanel"
        tabindex="0"
      >
        <div
          class="chakra-stack css-1qqukx9"
        >
          <div
            class="chakra-stack css-1twuvi0"
          >
            <div
              class="css-1m4qy5h"
            >
              <div
                class="css-16vysr"
              >
                <div
                  class="css-ys3583"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    John's BBallers
                  </p>
                </div>
                <div
                  class="css-11cj219"
                >
                  <p
                    class="chakra-text css-1oz5t98"
                  >
                    102
                  </p>
                </div>
                <div
                  class="css-2bw7u8"
                >
                  <div
                    class="css-wvo25n"
                  >
                    <div
                      class="css-gmuwbf"
                    >
                      COMPLETED
                    </div>
                  </div>
                </div>
                <div
                  class="css-18mjmcj"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    Jane's BBallers
                  </p>
                </div>
                <div
                  class="css-1apo5ro"
                >
                  <p
                    class="chakra-text css-1at3bww"
                  >
                    143
                  </p>
                </div>
                <div
                  class="css-16w3wmk"
                >
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-14p7a2y"
                  />
                </div>
                <div
                  class="css-1gohen6"
                >
                  <div
                    class="chakra-stack css-13kyi4y"
                  >
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        class="chakra-icon css-pj1t66"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="currentColor"
                        >
                          <path
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
                          />
                          <path
                            d="M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"
                          />
                        </g>
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        9/16/2021, 10:49:50 PM
                      </p>
                    </div>
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h24v24H0V0z"
                          fill="none"
                        />
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                        />
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        John's Basketball Arena
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="chakra-stack css-1twuvi0"
          >
            <div
              class="css-1m4qy5h"
            >
              <div
                class="css-16vysr"
              >
                <div
                  class="css-ys3583"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    Lygon Kangaroos
                  </p>
                </div>
                <div
                  class="css-11cj219"
                >
                  <p
                    class="chakra-text css-1oz5t98"
                  >
                    120
                  </p>
                </div>
                <div
                  class="css-2bw7u8"
                >
                  <div
                    class="css-wvo25n"
                  >
                    <div
                      class="css-gmuwbf"
                    >
                      COMPLETED
                    </div>
                  </div>
                </div>
                <div
                  class="css-18mjmcj"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    Brunswick Emus
                  </p>
                </div>
                <div
                  class="css-1apo5ro"
                >
                  <p
                    class="chakra-text css-1at3bww"
                  >
                    134
                  </p>
                </div>
                <div
                  class="css-16w3wmk"
                >
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-14p7a2y"
                  />
                </div>
                <div
                  class="css-1gohen6"
                >
                  <div
                    class="chakra-stack css-13kyi4y"
                  >
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        class="chakra-icon css-pj1t66"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="currentColor"
                        >
                          <path
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
                          />
                          <path
                            d="M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"
                          />
                        </g>
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        9/19/2021, 10:49:50 PM
                      </p>
                    </div>
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h24v24H0V0z"
                          fill="none"
                        />
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                        />
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        John's Basketball Arena
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="chakra-stack css-1twuvi0"
          >
            <div
              class="css-1m4qy5h"
            >
              <div
                class="css-16vysr"
              >
                <div
                  class="css-ys3583"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    Swinburne Bulls
                  </p>
                </div>
                <div
                  class="css-11cj219"
                >
                  <p
                    class="chakra-text css-1at3bww"
                  >
                    121
                  </p>
                </div>
                <div
                  class="css-2bw7u8"
                >
                  <div
                    class="css-wvo25n"
                  >
                    <div
                      class="css-gmuwbf"
                    >
                      COMPLETED
                    </div>
                  </div>
                </div>
                <div
                  class="css-18mjmcj"
                >
                  <p
                    class="chakra-text css-16n2quf"
                  >
                    John's BBallers
                  </p>
                </div>
                <div
                  class="css-1apo5ro"
                >
                  <p
                    class="chakra-text css-1oz5t98"
                  >
                    91
                  </p>
                </div>
                <div
                  class="css-16w3wmk"
                >
                  <hr
                    aria-orientation="horizontal"
                    class="chakra-divider css-14p7a2y"
                  />
                </div>
                <div
                  class="css-1gohen6"
                >
                  <div
                    class="chakra-stack css-13kyi4y"
                  >
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        class="chakra-icon css-pj1t66"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="currentColor"
                        >
                          <path
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
                          />
                          <path
                            d="M17.134,15.81,12.5,11.561V6.5a1,1,0,0,0-2,0V12a1,1,0,0,0,.324.738l4.959,4.545a1.01,1.01,0,0,0,1.413-.061A1,1,0,0,0,17.134,15.81Z"
                          />
                        </g>
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        9/21/2021, 10:49:50 PM
                      </p>
                    </div>
                    <div
                      class="chakra-stack css-84zodg"
                    >
                      <svg
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h24v24H0V0z"
                          fill="none"
                        />
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                        />
                      </svg>
                      <p
                        class="chakra-text css-0"
                      >
                        John's Basketball Arena
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="css-1c152gq"
          >
            <div
              class="chakra-stack css-1tnb96d"
            >
              <p
                class="chakra-text css-11wrcrc"
              >
                Bye Bye Team
              </p>
              <div
                class="css-1bt7j4"
              >
                <div
                  class="css-gmuwbf"
                >
                  BYE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`)
    })
})
