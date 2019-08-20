<?php

namespace Code16\Sharp\Tests\Feature\Api;

use Code16\Sharp\Tests\Fixtures\PersonSharpShow;

class ShowControllerTest extends BaseApiTest
{

    protected function setUp(): void
    {
        parent::setUp();

        $this->login();
    }

    /** @test */
    public function we_can_get_show_data_for_an_instance()
    {
        $this->withoutExceptionHandling();
        $this->buildTheWorld();

        $this->getJson('/sharp/api/show/person/1')
            ->assertStatus(200)
            ->assertJson([
                "data" => [
                    "name" => "John Wayne"
                ]
            ]);
    }

    /** @test */
    public function we_wont_get_entity_attribute_for_a_non_show_data()
    {
        $this->buildTheWorld();

        $result = $this->getJson('/sharp/api/show/person/1');

        $this->assertArrayHasKey("name", $result->json()["data"]);
        $this->assertArrayNotHasKey("job", $result->json()["data"]);
    }

    /** @test */
    public function we_can_get_show_fields_for_an_instance()
    {
        $this->buildTheWorld();

        $this->json('get', '/sharp/api/show/person/1')
            ->assertStatus(200)
            ->assertJson(["fields" => [
                "name" => [
                    "type" => "text"
                ]
            ]]);
    }

    /** @test */
    public function we_can_get_show_layout_for_an_instance()
    {
        $this->buildTheWorld();

        $this->json('get', '/sharp/api/show/person/1')
            ->assertStatus(200)
            ->assertJson(["layout" => [
                "sections" => [[
                    "title" => "Identity",
                    "columns" => [
                        [
                            "size" => 6,
                            "fields" => [
                                [
                                    ["key" => "name"]
                                ]
                            ]
                        ]
                    ]
                ]]
            ]]);
    }

    /** @test */
    public function we_can_get_show_config_for_an_instance()
    {
        $this->buildTheWorld();

        $this->json('get', '/sharp/api/show/person/1')
            ->assertStatus(200)
            ->assertJson(["config" => [
                "commands" => [
                    "instance" => [
                        [
                            [
                                "key" => "test_command",
                                "label" => "Label"
                            ]
                        ]
                    ]
                ],
                "state" => [
                    "attribute" => "state",
                    "values" => [
                        [
                            "value" => "active",
                            "label" => "Label",
                            "color" => "blue"
                        ]
                    ]
                ]
            ]]);
    }

    protected function buildTheWorld()
    {
        parent::buildTheWorld();

        $this->app['config']->set(
            'sharp.entities.person.show',
            PersonSharpShow::class
        );
    }
}