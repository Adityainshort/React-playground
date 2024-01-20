import React from 'react';


function Card({name="NA" , price = "NA" , img = "data:image/png;base64,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"} ) {
    return <>
    
    <div class="flex p-6 font-mono">
  <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX////+/v4AAAD39/f7+/v19fXy8vLv7+/w8PDs7Ox4eHjc3Nzo6OiSkpLj4+O+vr6wsLBPT0/Ly8toaGipqanS0tKDg4Obm5uhoaHHx8e3t7fZ2dmKiop0dHRdXV0tLS1EREQdHR0UFBQpKSkNDQ06OjphYWE9PT1+fn4kJCRKSkoZGRlVVVU7OzsOYMscAAALOElEQVR4nO2ca3+iPBOHk0kCggIK4vlUqz2tz/f/es9MEhC7aru21nr/5nrRxUB0/sxkMsG4QjAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw/ww8tYGMP+GlOSzd27Tpjr74/Z8HWtzJ+uPhqPuOPJtknTSHyGCSbwE5DUe2xP6hrZeBCopX0jBZr2hf55GpfWX06cmPWx7i5NkgAePuXCq74vxCjbz7rQTKNNpZ7OeVdl2nk3W8PCSh+7CaLSBxEbxXaHn8DgJ6KiyPBwPMCqfk3YHXdvLVOPi8A1mN7DxC0hhtpBop67hG5n2FzZip+8uFz3o/rSRXyN4hNwOOTFpVWnSptJoBlCk4jAm8di8QnQTSy9E7lCgnRr6ifOja09jgHm7mjj2l+PrDIqbmHoRUgyh7w7Gzy552kzZngPE7VO9epDey6woRQgLf7ztWn+R4WMcgXF6ulsGg3tJp1IMoG29IQUMbZPJMDwhCd+HZ6MTXvt6L3O+VDikvDdGsH6a7x5Q3m7i7D/tphcof8bAr9NFU60Q/FMOFr1dkVDVdj4CKdckdzIOxe6hqsGaU+EHY0wKhaP3PhRG5Auvx1XaPp+e7YWnl6/BT9j3dTKYfnzRX6D+GM6k2t/EAC7phT4cQfbdtlyHVXxJL1Q49nPL70biMJxc3POie/Oz0PxwcQlt1qvb51JZF5nvGqr1A46m5aWliezBbasaecjRFmQ+v2xWu30yJQ16jxN12EBm6mX/4o8Y4hC+YZxaOUoZoxCvkBqwxVCDdgqVr7ovYWwf13yr1f8CCTRBK4zCVmC8RK0OW9C8fBNcbGQKqxsuoKycfUwqvY9RVf0l40a7y71glnBbF6p92agNuQyb9i0Bikb7ig9n7ZMapFhgqrmdDzFGW/Ur4xSqoE7vyitc5+80vJtfztTgUiRYt50MU3mm63dAcsLqhW4ZG6UqqL52EKplA1dAeGjK4VzybmZ5Zz8W7TNxSsbJnt8FyamLFdPy49CE1SeqkJrE9PXvIsBlpcrMamL5W4CWbdgJn6aPnJf6pxRiBRnUCisnqpDcKiaFm1YqFU5R9bJ6pf8y1HVS64eq87sr7KfJ4zfnuxXS1yqRUX62wMiVTYVJX8hmBWBfiLpCkP6Vls2CqPKtFot12qgnDqjvzbUkNqM0DEw1HwaRzzVe4aIUsqnJ2euM9pOLOKrBOTbZppS0ptNpx35o83T9PlfS2FCoKUj9VGjClntkYXOpFH9sq3TTo/RVj6wudydtTaTrCbWSgJ+g+1AsAFb03QY8FN2Ovx2uo5JaHQ3hb1cYhKY22TtRBWk5TSMpHoUV50VZgabWpL1eo5qSK61CKTEhaW9JMS8WK3oG2ZsYUXf0Cq/lxb1CiS60IvBTqWwzaXdW7F7Jtm1RCCvPyFoE2UO1rJteULB0U6m12h+58NPhDOB5mPrPi9qTwRKWXV9ASeXv1PV9iCOObqihMkbJKFn2VrtBdzIpp9NymJBCEQTWfGs23Xsszm0QCm0VKuParVPq9YkoH2CbKYpGQ27GdYqOugC71Cda5303aVxNIb1z1CJ9AX5UYEyCnpvRF7tUtQmR9a1PAqwE7G0QykYplUB2SUJasSDC1YjANYm06xIvUQy2b+QvY6+na+1tVAXAlCKC7g31uVo+rX2oI7I9CCno8gdYJx1DlZbNpWJYUjBh5AbajTanMKCoVW4MOu0oGa0NaoUi6sEOZx5llFfoehgputv1RCrnw6BKYVdSaKs2yjOKZnpJeeGlIynXVAqLyCdLq8AIVSu0LlVWlzuUgXJHNstMX2FoxyV1s+1eIb5f+gpjm7cljftqKXo1hTbP4CHK6ffWmZ0waM3hFK6CemS5gPQKlagUBo3GOpliQYo1t8+0dDtMQ2EgSlh3nA+lMlf3obF5JkBR/beiE1YRi5U3xdtjYDMpjS8bkD42vVbnQ99IAzewYarFCDZtod3Uov3t8HGNPaTEadIqtJ2vqNCunloBDXpcNU1WcyPClg1Z5TKNDgEHyt40TAvGK2yOQ2XcaYpeO1hjWLlpzyo0XqGueuBb7qD0udTVfNdSGNh1Ew16I9LeU1TNHEEg3Qo4gnRfgYjaEZRLpcul9Ywv7bxBR+ECPSTqeoAU1tf6HjqH2M+HSlwrmfo1vrEjHQNr/kZfErpRSS61CoPNeP9sw1YE7pZbU/2Bcvle+UMZPMGM6nAtZD1/+mqg6oHlzmql3Dvat7ySD8lzuqrXRlDY9T1ODDZv2DNSbBNnZ+MRjjdX7Rubp0V7C7QckVW3/aWNHkq+LPcPieSVFNqnMrZSwaNgCWlEw1JTjeoKFVoSDWC/HtCfgJLoWLgy5dx18glajVfXiVKrsKrtxxDr0K7vq7C1PhCp+3b0jEbZtBJD4aF99p5QK33ycqOso/dLyqsorJagUrxAjut7ClO9X2fQiZl9lnSwvj2xmsVrshW8RW7xdfyyWs8Y5geXXEFgtQr3S/dnoLLM2JK/KVCKXWOD2jmRQuQ9gELRGPzgYiHSjd38cEV5lcTqAzSsbNbzD/T3pyR9gRR/xgbSRxsST+6w2WOGAKMf2IDavIEKdsLlyHrRvb+5A4CuPnj6559J1buDZTq0m2prb1c733QnG73slms892fZK2bD0WgYb/HVZV+6XiLSHyjoySpsq0dO+8vy/+GKI616eI3189NoPEObl3/g4XCDkGqPij/u8cVyu90+PoBn8zYMhf7hR+EaHlVj4ByexBQ5eQboJXnn8IRKy35Mz2A28+wFVp1GeMpyQK5azofjdieyVVPYSdtlnpftm+zKlG9A1p8e+TqnjWyw3MVJH5f/3VESuwcvAIthqfUTFWo1aUJb2otuRx15K9GMgJ9jBt0PvwcrR4s/0GRbDDMbvO2133Vh3yKzO8CzX7ZtL4feOYU2udKBaZfjLMvG47Id+DO0722dV71N/xWlj/zJX7TrSy3Pf9Urq8mj2eYfrMbQi7yYcIiRW+T+5C/SZ3cBX7DNjhRipT3zh0GyPrdp+KagdWusmP+1F96SPlXa9kjTY7qXzrkdpzcEjcLBFH584WEvEe5gEVhJCusUiCPx8bbM20BWLWD3r+kPl0puK0owwppmnlaFzvcb+C2YB6r3P5X/XNoJC+jZr+nNEPNn0b7lxpLPgDkDZ7FPBpkfgdaBgc2f7d8ang1Q4gZWrc8YihdMn2FB4zYagPvRzFXXQd9GZwt+06s8HnLSeyqaw5JSaDmH8z+6+HXoonLI8fPOTxHOCyMpoj5W3Q/Jb50fjkI7EzApDlwVfuR89VuuRMsMbwY8dwNfvtwJpCCY0cA6+VsQ+i3XKBrPacU7L0X1UOYnrfw6If0Wdp2UzdnRzSE6e4PHF/eTw173ly0ePo0toEd2XVuM8k6r1qGnA3Tchr793uz6OFjvVqEbVtOk555ArBbFPI7nxeLZrwqfB5ktzn75/H6GelAF4+Tp9XDJOx+O7UNVcYeD7xQyLbMJkuXtO/mJz79wdDveDey4HvXCXlZr9v+YQIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGOYn8L9ZdT9clf6/9Wv8X5O3tu8bOa7lP6CwPc0ncRnOuyrOZZLo2UzOBmX/Jeu/xOlsdGvzvoFZPDDpYJbGYX8SzIfZLJvsuiIetkTeR5X3+t847NGDuC+GZSFmUZaZwSLsJ6M0m0XYMgjLQfEfiNLhSPV7ZTeZB4PZeJiMu3HeHw67/YFYiGQ873z8Dr+dTkeUeS7yMMhzNS1F2Rb4N821bAuZ39N/ZsSc5v+VMHdQ+QRrsgAAAABJRU5ErkJggg==" alt="" class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>
  <form class="flex-auto pl-6">
    <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
      <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
        {name}
      </h1>
      <div class="relative text-lg text-white">
        ${price}.00
      </div>
      <div class="relative uppercase text-teal-400 ml-3">
        In stock
      </div>
    </div>
    <div class="flex items-baseline my-6">
      <div class="space-x-3 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-2 mb-4 text-sm font-medium">
      <div class="flex space-x-4">
        <button class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" type="submit">
          Buy now
        </button>
        <button class="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-12 h-12 text-black" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-xs leading-6 text-slate-500">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
    </>;
}

export default Card;