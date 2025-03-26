"use client";
import { useTheme } from "next-themes";
import Color from "./color";
import ColorToken from "./colorToken";
import { useState, useEffect } from "react";

export default function Colors() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on server-side and first render
  }
  return (
    <div className="py-20 px-10 gap-16 flex flex-col">
      {/* Colors indicator */}
      <div className="flex sm:flex-row flex-col gap-[10px] text-center fixed top-20 right-10">
        <div className="bg-white-300 dark:bg-black-500 rounded-full p-4 text-primary font-archiv font-bold">
          🎨 Color palette
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-white-300 dark:bg-black-500 rounded-full p-4 text-primary font-archiv font-bold cursor-pointer hover:bg-white-400 dark:hover:bg-black-400 transition-colors"
        >
          <span className="dark:hidden">☀️ Light mode</span>
          <span className="hidden dark:block">🌙 Dark mode</span>
        </button>
      </div>

      {/* Color Palettes */}
      <div className="font-archiv font-bold text-5xl">Color Palettes</div>

      {/* Blue */}
      <div className="flex flex-col gap-8">
        <div className="font-archiv font-bold text-4xl">Blue</div>
        <div className="flex flex-row">
          {/* blue-100 */}
          <Color
            color={"bg-blue-100"}
            hex={"8EB2EB"}
            rating={theme === "dark" ? "8.94" : "2.16"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
            isFirst={true}
          />
          {/* blue-200 */}
          <Color
            color={"bg-blue-200"}
            hex={"78A1E2"}
            rating={theme === "dark" ? "7.35" : "2.62"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* blue-300 */}
          <Color
            color={"bg-blue-300"}
            hex={"5C8BD6"}
            rating={theme === "dark" ? "5.63" : "3.43"}
            ratingText={theme === "dark" ? "AA" : "AA"}
            labelColor={theme === "dark" ? "dark" : "light"}
          />
          {/* blue-400 */}
          <Color
            color={"bg-blue-400"}
            hex={"3566B6"}
            rating={theme === "dark" ? "3.43" : "5.63"}
            ratingText={theme === "dark" ? "AA" : "AA"}
            labelColor={theme === "dark" ? "dark" : "light"}
          />
          {/* blue-500 */}
          <Color
            color={"bg-blue-500"}
            hex={"2252A0"}
            rating={theme === "dark" ? "2.56" : "7.54"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
          {/* blue-600 */}
          <Color
            color={"bg-blue-600"}
            hex={"174082"}
            rating={theme === "dark" ? "1.92" : "10.03"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
        </div>
      </div>

      {/* Green */}
      <div className="flex flex-col gap-8">
        <div className="font-archiv font-bold text-4xl">Green</div>
        <div className="flex flex-row">
          {/* green-100 */}
          <Color
            color={"bg-green-100"}
            hex={"BEEFE8"}
            rating={theme === "dark" ? "15.37" : "1.25"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
            isFirst={true}
          />
          {/* green-200 */}
          <Color
            color={"bg-green-200"}
            hex={"98E1D7"}
            rating={theme === "dark" ? "12.96" : "1.49"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* green-300 */}
          <Color
            color={"bg-green-300"}
            hex={"66CCBE"}
            rating={theme === "dark" ? "10.07" : "1.91"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* green-400 */}
          <Color
            color={"bg-green-400"}
            hex={"2C968C"}
            rating={theme === "dark" ? "5.38" : "3.59"}
            ratingText={theme === "dark" ? "AAA" : "AA"}
            labelColor={theme === "dark" ? "dark" : "light"}
          />
          {/* green-500 */}
          <Color
            color={"bg-green-500"}
            hex={"1B7E74"}
            rating={theme === "dark" ? "3.94" : "4.9"}
            ratingText={theme === "dark" ? "FAIL" : "AA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
          {/* green-600 */}
          <Color
            color={"bg-green-600"}
            hex={"00665B"}
            rating={theme === "dark" ? "2.8" : "6.88"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
        </div>
      </div>

      {/* Yellow */}
      <div className="flex flex-col gap-8">
        <div className="font-archiv font-bold text-4xl">Yellow</div>
        <div className="flex flex-row">
          {/* yellow-100 */}
          <Color
            color={"bg-yellow-100"}
            hex={"FFF3C2"}
            rating={theme === "dark" ? "17.34" : "1.11"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
            isFirst={true}
          />
          {/* yellow-200 */}
          <Color
            color={"bg-yellow-200"}
            hex={"F5DF84"}
            rating={theme === "dark" ? "14.51" : "1.33"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* yellow-300 */}
          <Color
            color={"bg-yellow-300"}
            hex={"F5D970"}
            rating={theme === "dark" ? "13.84" : "1.39"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* yellow-400 */}
          <Color
            color={"bg-yellow-400"}
            hex={"EED163"}
            rating={theme === "dark" ? "12.82" : "1.5"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* yellow-500 */}
          <Color
            color={"bg-yellow-500"}
            hex={"E4C443"}
            rating={theme === "dark" ? "11.29" : "1.71"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* yellow-600 */}
          <Color
            color={"bg-yellow-600"}
            hex={"C49D05"}
            rating={theme === "dark" ? "7.52" : "2.56"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
        </div>
      </div>

      {/* Purple */}
      <div className="flex flex-col gap-8">
        <div className="font-archiv font-bold text-4xl">Purple</div>
        <div className="flex flex-row">
          {/* purple-100 */}
          <Color
            color={"bg-purple-100"}
            hex={"DCB6F7"}
            rating={theme === "dark" ? "11.11" : "1.71"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
            isFirst={true}
          />
          {/* purple-200 */}
          <Color
            color={"bg-purple-200"}
            hex={"CC9DF1"}
            rating={theme === "dark" ? "8.89" : "2.17"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* purple-300 */}
          <Color
            color={"bg-purple-300"}
            hex={"C086EA"}
            rating={theme === "dark" ? "7.21" : "2.67"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* purple-400 */}
          <Color
            color={"bg-purple-400"}
            hex={"7C46A4"}
            rating={theme === "dark" ? "3" : "6.42"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
          {/* purple-500 */}
          <Color
            color={"bg-purple-500"}
            hex={"693091"}
            rating={theme === "dark" ? "2.23" : "8.63"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
          {/* purple-600 */}
          <Color
            color={"bg-purple-600"}
            hex={"532277"}
            rating={theme === "dark" ? "1.71" : "11.27"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
        </div>
      </div>

      {/* Red */}
      <div className="flex flex-col gap-8">
        <div className="font-archiv font-bold text-4xl">Red</div>
        <div className="flex flex-row">
          {/* red-100 */}
          <Color
            color={"bg-red-100"}
            hex={"E9A5AD"}
            rating={theme === "dark" ? "9.61" : "2"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
            isFirst={true}
          />
          {/* red-200 */}
          <Color
            color={"bg-red-200"}
            hex={"DF9098"}
            rating={theme === "dark" ? "7.89" : "2.44"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* red-300 */}
          <Color
            color={"bg-red-300"}
            hex={"D1757E"}
            rating={theme === "dark" ? "6.03" : "3.2"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* red-400 */}
          <Color
            color={"bg-red-400"}
            hex={"B1384A"}
            rating={theme === "dark" ? "3.25" : "5.94"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
          {/* red-500 */}
          <Color
            color={"bg-red-500"}
            hex={"A82431"}
            rating={theme === "dark" ? "2.72" : "7.09"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
          {/* red-600 */}
          <Color
            color={"bg-red-600"}
            hex={"8E0B18"}
            rating={theme === "dark" ? "2.03" : "9.49"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
        </div>
      </div>

      {/* Main colors */}
      <div className="font-archiv font-bold text-5xl">Main colors</div>
      {/* Brand */}
      <div className="flex flex-col gap-8">
        <div className="flex sm:flex-row flex-col gap-4 justify-between">
          <div className="font-archiv font-bold text-4xl">Brand</div>
          <p className="font-work text-xl">
            For all of interactive elements and important visuals, main CTA
          </p>
        </div>
        <div className="flex flex-row">
          {/* Brand Light */}
          <ColorToken
            isFirst={true}
            color={"brand-light"}
            colorVariable={theme === "dark" ? "blue-100" : "blue-600"}
            ratingText={theme === "dark" ? "AAA" : "AAA"}
            rating={theme === "dark" ? "8.94" : "10.03"}
          />
          {/* Brand Default */}
          <ColorToken
            color={"brand-default"}
            colorVariable={theme === "dark" ? "blue-200" : "blue-500"}
            ratingText={theme === "dark" ? "AAA" : "AAA"}
            rating={theme === "dark" ? "7.35" : "7.54"}
          />
          {/* Brand Dark */}
          <ColorToken
            color={"brand-dark"}
            colorVariable={theme === "dark" ? "blue-300" : "blue-400"}
            ratingText={theme === "dark" ? "AAA" : "AAA"}
            rating={theme === "dark" ? "5.63" : "5.63"}
          />
        </div>
      </div>

      {/* Context colors */}
      <div className="flex flex-col gap-12">
        <div className="flex sm:flex-row flex-col gap-4 justify-between">
          <div className="font-archiv font-bold text-4xl">Context colors</div>
          <p className="font-work text-xl">
            Replace the primary blue on some of the components to enrich the UI
          </p>
        </div>

        {/* Green */}
        <div className="flex flex-col gap-8">
          <h5>Green</h5>
          <div className="flex flex-row">
            {/* Green Light */}
            <ColorToken
              isFirst={true}
              color={"green-light"}
              colorVariable={theme === "dark" ? "green-100" : "green-600"}
              ratingText={theme === "dark" ? "AAA" : "AAA"}
              rating={theme === "dark" ? "15.37" : "6.88"}
            />
            {/* Green Default */}
            <ColorToken
              color={"green-default"}
              colorVariable={theme === "dark" ? "green-200" : "green-500"}
              ratingText={theme === "dark" ? "AAA" : "AA"}
              rating={theme === "dark" ? "12.96" : "4.9"}
            />
            {/* Green Dark */}
            <ColorToken
              color={"green-dark"}
              colorVariable={theme === "dark" ? "green-300" : "green-400"}
              ratingText={theme === "dark" ? "AAA" : "AA"}
              rating={theme === "dark" ? "10.07" : "3.59"}
            />
          </div>
        </div>

        {/* Yellow */}
        <div className="flex flex-col gap-8">
          <h5>Yellow</h5>
          <div className="flex flex-row">
            {/* Yellow Light */}
            <ColorToken
              isFirst={true}
              color={"yellow-light"}
              colorVariable={theme === "dark" ? "yellow-100" : "yellow-600"}
              ratingText={theme === "dark" ? "AAA" : "FAIL"}
              rating={theme === "dark" ? "17.34" : "2.56"}
            />
            {/* Yellow Default */}
            <ColorToken
              color={"yellow-default"}
              colorVariable={theme === "dark" ? "yellow-200" : "yellow-500"}
              ratingText={theme === "dark" ? "AAA" : "FAIL"}
              rating={theme === "dark" ? "14.51" : "1.71"}
            />
            {/* Yellow Dark */}
            <ColorToken
              color={"yellow-dark"}
              colorVariable={theme === "dark" ? "yellow-300" : "yellow-400"}
              ratingText={theme === "dark" ? "AAA" : "FAIL"}
              rating={theme === "dark" ? "13.84" : "1.5.84"}
            />
          </div>
        </div>

        {/* Purple */}
        <div className="flex flex-col gap-8">
          <h5>Purple</h5>
          <div className="flex flex-row">
            {/* Purple Light */}
            <ColorToken
              isFirst={true}
              color={"purple-light"}
              colorVariable={theme === "dark" ? "purple-100" : "purple-600"}
              ratingText={theme === "dark" ? "AAA" : "AAA"}
              rating={theme === "dark" ? "11.11" : "11.27"}
            />
            {/* Purple Default */}
            <ColorToken
              color={"purple-default"}
              colorVariable={theme === "dark" ? "purple-200" : "purple-500"}
              ratingText={theme === "dark" ? "AAA" : "AAA"}
              rating={theme === "dark" ? "8.89" : "8.63"}
            />
            {/* Purple Dark */}
            <ColorToken
              color={"purple-dark"}
              colorVariable={theme === "dark" ? "purple-300" : "purple-400"}
              ratingText={theme === "dark" ? "AAA" : "AAA"}
              rating={theme === "dark" ? "7.21" : "6.42"}
            />
          </div>
        </div>

        {/* Red */}
        <div className="flex flex-col gap-8">
          <h5>Red</h5>
          <div className="flex flex-row">
            {/* Red Light */}
            <ColorToken
              isFirst={true}
              color={"red-light"}
              colorVariable={theme === "dark" ? "red-100" : "red-600"}
              ratingText={theme === "dark" ? "AAA" : "AAA"}
              rating={theme === "dark" ? "9.61" : "9.49"}
            />
            {/* Red Default */}
            <ColorToken
              color={"red-default"}
              colorVariable={theme === "dark" ? "red-200" : "red-500"}
              ratingText={theme === "dark" ? "AAA" : "AAA"}
              rating={theme === "dark" ? "7.87" : "7.09"}
            />
            {/* Red Dark */}
            <ColorToken
              color={"red-dark"}
              colorVariable={theme === "dark" ? "red-300" : "red-400"}
              ratingText={theme === "dark" ? "AAA" : "AAA"}
              rating={theme === "dark" ? "6.03" : "5.94"}
            />
          </div>
        </div>
      </div>

      {/* Shades of gray */}
      <div className="font-archiv font-bold text-5xl">Shades of gray</div>

      {/* Black & White */}
      <div className="flex flex-col gap-8">
        <div className="font-archiv font-bold text-4xl">Black & White</div>
        <div className="flex flex-row border border-black-100 rounded-[20px]">
          {/* black-100 */}
          <Color
            color={"bg-black-100"}
            hex={"667085"}
            rating={theme === "dark" ? "3.88" : "4.97"}
            ratingText={theme === "dark" ? "AA" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
            isFirst={true}
          />
          {/* black-200 */}
          <Color
            color={"bg-black-200"}
            hex={"4E576A"}
            rating={theme === "dark" ? "2.66" : "7.25"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
          {/* black-300 */}
          <Color
            color={"bg-black-300"}
            hex={"373F4E"}
            rating={theme === "dark" ? "1.82" : "10.58"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
          {/* black-400 */}
          <Color
            color={"bg-black-400"}
            hex={"303645"}
            rating={theme === "dark" ? "1.6" : "12.07"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
          {/* black-500 */}
          <Color
            color={"bg-black-500"}
            hex={"212631"}
            rating={theme === "dark" ? "1.27" : "15.14"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
          {/* black-600 */}
          <Color
            color={"bg-black-600"}
            hex={"0A0E15"}
            rating={theme === "dark" ? "1" : "19.32"}
            ratingText={theme === "dark" ? "FAIL" : "AAA"}
            labelColor={theme === "dark" ? "light" : "light"}
          />
        </div>
        {/* White */}
        <div className="flex flex-row border border-white-300 rounded-[20px]">
          {/* white-100 */}
          <Color
            color={"bg-white-100"}
            hex={"ffffff"}
            rating={theme === "dark" ? "19.32" : "1"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
            isFirst={true}
          />
          {/* white-200 */}
          <Color
            color={"bg-white-200"}
            hex={"F0F1F5"}
            rating={theme === "dark" ? "17.12" : "1.12"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* white-300 */}
          <Color
            color={"bg-white-300"}
            hex={"E0E4EB"}
            rating={theme === "dark" ? "15.15" : "1.27"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* white-400 */}
          <Color
            color={"bg-white-400"}
            hex={"D1D6E0"}
            rating={theme === "dark" ? "13.25" : "1.45"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* white-500 */}
          <Color
            color={"bg-white-500"}
            hex={"C6CDDB"}
            rating={theme === "dark" ? "12.1" : "1.59"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
          {/* white-600 */}
          <Color
            color={"bg-white-600"}
            hex={"BFC6D4"}
            rating={theme === "dark" ? "11.26" : "1.71"}
            ratingText={theme === "dark" ? "AAA" : "FAIL"}
            labelColor={theme === "dark" ? "dark" : "dark"}
          />
        </div>
      </div>

      {/* Text colors */}
      <div className="flex flex-col gap-12">
        <div className="font-archiv font-bold text-4xl">Text colors</div>

        {/* Green */}
        <div className="flex flex-row">
          {/* Green Light */}
          <ColorToken
            isFirst={true}
            color={theme === "dark" ? "bg-white-100" : "bg-black-600"}
            colorVariable={theme === "dark" ? "header" : "header"}
            ratingText={theme === "dark" ? "AAA" : "AAA"}
            rating={theme === "dark" ? "19.32" : "19.32"}
          />
          {/* Green Default */}
          <ColorToken
            color={theme === "dark" ? "bg-white-200" : "bg-black-500"}
            colorVariable={theme === "dark" ? "body" : "body"}
            ratingText={theme === "dark" ? "AAA" : "AA"}
            rating={theme === "dark" ? "17.12" : "15.14"}
          />
          {/* Green Dark */}
          <ColorToken
            color={theme === "dark" ? "bg-black-600" : "bg-white-100"}
            colorVariable={theme === "dark" ? "reverse" : "reverse"}
            ratingText={theme === "dark" ? "FAIL" : "FAIL"}
            rating={theme === "dark" ? "1" : "1"}
          />
        </div>
      </div>
    </div>
  );
}
