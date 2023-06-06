import factory

from verdantech_api.apps.gardens.models import Garden, GardenMembership

from ..accounts_test.factories import UserFactory


class BaseGardenFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Garden

    name = factory.Faker("first_name")
    visibility = "PRIVATE"


class GardenAdminMembershipFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = GardenMembership

    user = factory.SubFactory(UserFactory)
    garden = factory.SubFactory(BaseGardenFactory)
    role = "ADMIN"
    open_invite = False


class GardenFactory(BaseGardenFactory):

    admin = factory.RelatedFactory(
        GardenAdminMembershipFactory,
        factory_related_name="garden",
    )