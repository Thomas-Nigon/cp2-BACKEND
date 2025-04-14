import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";

@InputType()
export class CountryInput {
  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  flag!: string;

  @Field()
  continent!: string;
}

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getAllCountries() {
    const countries = await Country.find();
    return countries;
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string) {
    const country = await Country.findOneBy({ code });
    return country;
  }

  @Query(() => [Country])
  async getCountryByContinent(@Arg("continent") continent: string) {
    const countries = await Country.findBy({ continent });
    return countries;
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg("data") { code, name, flag, continent }: CountryInput
  ) {
    const newCountry = Country.create({ code, name, flag, continent });
    await newCountry.save();
    return newCountry;
  }
}
